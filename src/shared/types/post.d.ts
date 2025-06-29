import { IPaginationOptions } from '@/lib/utils/server/pagination';

export interface IPost {
    id: string;
    content: string;
    author: string;
    createdAt: string;
}

export interface IAddPostBody extends Pick<IPost, 'content'> {}

export interface IPostsOptions extends Omit<IPaginationOptions, 'data'> {
    search?: string;
}
