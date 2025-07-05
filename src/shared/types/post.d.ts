import type { IUser } from './user';
import type { IPaginationOptions } from './pagination';

export interface IPost {
    id: string;
    content: string;
    author: Omit<IUser, 'password'>;
    created_at: string;
}

export interface IAddPostBody extends Pick<IPost, 'content'> {
    author: string;
}

export interface IPostsOptions extends Omit<IPaginationOptions, 'data'> {
    search?: string;
}

export type IAddPostInput = Pick<IPost, 'content'>;
