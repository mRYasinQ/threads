'use client';

import { useEffect } from 'react';

import { useGetPostsInfiniteQuery } from '@/store/services/threadsApi';

import { PostItem } from './PostItem';

export const Posts = () => {
    const { data: posts, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetPostsInfiniteQuery(undefined);

    useEffect(() => {
        const scrollHandler = () => {
            const scrolledTo = window.scrollY + window.innerHeight;
            const threshold = 800;
            const isReachToThreshold = scrolledTo >= document.body.scrollHeight - threshold;

            if (isReachToThreshold && !isFetchingNextPage && hasNextPage) fetchNextPage();
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

    return (
        <div className="flex flex-col divide-y divide-gray-200 dark:divide-gray-800">
            {posts?.pages.map((posts) => posts.body.data?.map((post) => <PostItem key={post.id} post={post} />))}
        </div>
    );
};
