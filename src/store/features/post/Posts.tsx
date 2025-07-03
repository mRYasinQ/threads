'use client';

import { useEffect } from 'react';

import { useGetPostsInfiniteQuery } from '@/store/services/threadsApi';

import { PostItem } from './PostItem';

export const Posts = () => {
    const { data: posts, hasNextPage, fetchNextPage, isFetchingNextPage } = useGetPostsInfiniteQuery(undefined);

    useEffect(() => {
        const scrollHandler = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageHeight = document.body.offsetHeight - 800;

            if (scrollPosition >= pageHeight && !isFetchingNextPage && hasNextPage) {
                fetchNextPage();
            }
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
