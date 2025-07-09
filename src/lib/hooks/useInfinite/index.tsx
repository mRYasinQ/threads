'use client';

import { useCallback, useState } from 'react';

import type { IInfiniteOptions, IInfiniteResult } from './types';

export const useInfinite = <T,>({
    initialData,
    initialHasNextPage,
    getData,
    initialPage = 1,
}: IInfiniteOptions<T>): IInfiniteResult<T> => {
    const [data, setData] = useState<T[]>(initialData);
    const [page, setPage] = useState<number>(initialPage);
    const [hasNextPage, setHasNextPage] = useState<boolean>(initialHasNextPage);
    const [isFetching, setIsFetching] = useState<boolean>(false);

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
        }
    }, [getData, hasNextPage, isFetching, page]);

    return {
        data,
        hasNextPage,
        isFetching,
        page,
        loadData,
    };
};
