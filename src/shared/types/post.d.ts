import { IPaginationOptions } from './pagination';

export interface IPost {
    id: string;
    content: string;
    author: string;
    createdAt: string;
}

export type IAddPostBody = Pick<IPost, 'content'>;

export interface IPostsOptions extends Omit<IPaginationOptions, 'data'> {
    search?: string;
}
