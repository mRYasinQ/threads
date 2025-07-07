'use client';

import { useEffect, useState } from 'react';

import { useLazyGetPostsQuery } from '@/store/services/post';

import { PostItem } from './PostItem';

import type { IPostsProps } from './types';
import type { IPost } from '@/shared/types';

export const Posts = ({ initialData: { initialPost, initialHasNextPage } }: IPostsProps) => {
    const [posts, setPosts] = useState<IPost[]>(initialPost);
    const [hasNextPage, setHasNextPage] = useState<boolean>(initialHasNextPage);
    const [page, setPage] = useState<number>(2);

    const [getPosts, { data, isSuccess, isFetching }] = useLazyGetPostsQuery();

    useEffect(() => {
        const scrollHandler = () => {
            const scrolledTo = window.scrollY + window.innerHeight;
            const threshold = 800;
            const isReachToThreshold = scrolledTo >= document.body.scrollHeight - threshold;

            if (isReachToThreshold && !isFetching && hasNextPage) getPosts({ page });
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [getPosts, hasNextPage, isFetching, page]);

    useEffect(() => {
        if (!isSuccess || !data?.ok) {
            return;
        }

        const newResponse = data?.body;
        if (newResponse.pagination?.hasNextPage) {
            setHasNextPage(true);
            setPage(newResponse.pagination?.currentPage + 1);
        } else {
            setHasNextPage(false);
        }
        if (newResponse.data) setPosts((prevPosts) => prevPosts.concat(newResponse.data as IPost[]));
    }, [data, isSuccess]);

    return (
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            {posts?.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};
