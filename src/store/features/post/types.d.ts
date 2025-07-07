import type { IPost } from '@/shared/types';

export interface IPostsProps {
    initialData: IPostsInitialData;
}

export interface IPostsInitialData {
    initialPost: IPost[];
    initialHasNextPage: boolean;
}

export interface IPostProps {
    post: IPost;
}
