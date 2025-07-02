import { IDataPagination, IPaginationOptions } from '@/shared/types';

export const pagination = <T>({ data, limit = 10, page = 1 }: IPaginationOptions<T>): IDataPagination<T[]> => {
    const totalData: number = data.length;
    if (limit < 5 || limit > 30) limit = 10;

    const totalPages: number = Math.ceil(totalData / limit);
    if (page > totalPages || page < 1) page = 1;

    const listData: T[] = data.slice((page - 1) * limit, page * limit);

    const hasNextPage: boolean = page < totalPages;
    const hasPrevPage: boolean = page > 1;

    return {
        data: listData,
        pagination: {
            totalData,
            currentPage: page,
            totalPages,
            hasNextPage,
            hasPrevPage,
        },
    };
};
