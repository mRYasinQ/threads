'use client';

import { useState, useRef, useEffect } from 'react';

import { useLazyGetPostsQuery } from '@/store/services/threadsApi';

import { RowResult } from './RowResult';

import { SearchIcon } from '@/components/icons/SearchIcon';
import { RemoveIcon } from '@/components/icons/RemoveIcon';

import type { LastSearchRequest } from './types';

export const Search = () => {
    const lastRequestRef = useRef<LastSearchRequest>(undefined);
    const [query, setQuery] = useState('');

    const [getPosts, { data: posts, isSuccess, isFetching }] = useLazyGetPostsQuery();

    useEffect(() => {
        if (query.length < 3) return;

        const timerId = setTimeout(() => {
            const { abort } = getPosts({ search: query, limit: 10 });
            lastRequestRef.current = abort;
        }, 300);

        return () => {
            if (lastRequestRef.current) lastRequestRef.current();
            clearTimeout(timerId);
        };
    }, [getPosts, query]);

    return (
        <div className="flex flex-col">
            <div className="p-8">
                <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-100 px-4 py-2.5 dark:border-gray-800 dark:bg-black">
                    <div className="size-5 stroke-gray-300 dark:stroke-gray-700">
                        <SearchIcon />
                    </div>
                    <input
                        className="w-full text-base font-medium text-gray-800 outline-none placeholder:text-gray-300 dark:text-gray-200 dark:placeholder:text-gray-700"
                        placeholder="Search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="min-size-2 w-5 cursor-pointer rounded-full bg-gray-300 stroke-gray-100 dark:bg-gray-600 dark:stroke-black"
                        >
                            <RemoveIcon />
                        </button>
                    )}
                </div>
            </div>
            <div className="flex h-full flex-col divide-y divide-gray-200 overflow-y-scroll dark:divide-gray-800">
                {query &&
                    posts &&
                    isSuccess &&
                    !isFetching &&
                    posts?.body.data?.map((post) => <RowResult key={post.id} post={post} />)}
            </div>
        </div>
    );
};
