import crypto from 'crypto';

import { readData, writeData } from '@/lib/utils';
import { pagination } from '@/lib/utils/pagination';
import AppError from '@/lib/exception/AppError';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { IPost, IPostsOptions } from '@/shared/types';
import type { IDataPagination } from '@/lib/utils/pagination';

const POSTS_FILE = 'posts';

export const getAllPosts = async (): Promise<IPost[]> => {
    const posts = await readData<IPost[]>(POSTS_FILE);
    return posts;
};

export const getPosts = async ({ search, limit = 10, page = 1 }: IPostsOptions): Promise<IDataPagination<IPost[]>> => {
    let posts: IPost[] = await getAllPosts();

    if (search) {
        posts = posts.filter((post) => post.content.includes(search));
    }

    const result = pagination<IPost>({ data: posts, limit, page });

    return result;
};

export const getPost = async (id: string): Promise<IPost> => {
    const posts = await getAllPosts();

    const post = posts.find((post) => post.id === id);
    if (!post) throw new AppError(Messages.POST_NOT_FOUND, HttpStatusCode.NOT_FOUND);

    return post;
};

export const addPost = async (data: Omit<IPost, 'id' | 'createdAt'>): Promise<boolean> => {
    const posts = await getAllPosts();
    const newPost: IPost = {
        id: crypto.randomUUID(),
        ...data,
        createdAt: new Date().toISOString(),
    };
    posts.push(newPost);
    writeData<IPost[]>(POSTS_FILE, posts);

    return true;
};
