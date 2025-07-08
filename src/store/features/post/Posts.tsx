'use client';

import { useLazyGetPostsQuery } from '@/store/services/post';

import { useInfinite } from '@/lib/hooks/useInfinite';

import { PostItem } from './PostItem';

import type { IPostsProps } from './types';
import type { IPost } from '@/shared/types';

export const Posts = ({ initialData: { initialPost, initialHasNextPage } }: IPostsProps) => {
    const [getPosts] = useLazyGetPostsQuery();

    const { data: posts } = useInfinite<IPost>({
        initialData: initialPost,
        initialHasNextPage,
        initialPage: 2,
        getData: (page) => getPosts({ page }).unwrap(),
        threshold: 1000,
    });

    return (
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            {posts?.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};
