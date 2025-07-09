import type { ICustomResponse } from '@/shared/types';

export interface IInfiniteOptions<T> {
    initialData: T[];
    initialHasNextPage: boolean;
    getData: (page: number) => Promise<ICustomResponse<T[]>>;
    initialPage?: number;
}

export interface IInfiniteResult<T> {
    data: T[];
    page: number;
    hasNextPage: boolean;
    isFetching: boolean;
    loadData: () => void;
}
