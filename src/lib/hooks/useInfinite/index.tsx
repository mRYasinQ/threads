'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import type { IInfiniteOptions, IInfiniteResult } from './types';

export const useInfinite = <T,>({
    initialData,
    initialHasNextPage,
    getData,
    initialPage = 1,
    threshold = 850,
}: IInfiniteOptions<T>): IInfiniteResult<T> => {
    const [data, setData] = useState<T[]>(initialData);
    const [page, setPage] = useState<number>(initialPage);
    const [hasNextPage, setHasNextPage] = useState<boolean>(initialHasNextPage);
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const hasOperation = useRef<boolean>(false);

    const loadData = useCallback(async () => {
        if (isFetching || !hasNextPage) return;

        setIsFetching(true);

        try {
            const { ok, body } = await getData(page);
            if (!ok) return setHasNextPage(false);

            if (body.pagination?.hasNextPage) {
                setHasNextPage(true);
                setPage(body.pagination?.currentPage + 1);
            } else {
                setHasNextPage(false);
            }

            if (body.data) setData((prevData) => prevData.concat(body.data as T[]));
        } catch {
        } finally {
            setIsFetching(false);
            hasOperation.current = false;
        }
    }, [getData, hasNextPage, isFetching, page]);

    useEffect(() => {
        const scrollHandler = async () => {
            const scrolledTo = window.scrollY + window.innerHeight;
            const isReachToThreshold = scrolledTo >= document.body.scrollHeight - threshold;

            if (isReachToThreshold) {
                if (hasOperation.current) return;
                loadData();
                hasOperation.current = true;
            }
        };

        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [loadData, threshold, isFetching]);

    return {
        data,
        hasNextPage,
        isFetching,
        page,
    };
};
