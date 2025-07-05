import { IDataPagination, IPaginationOptions } from '@/shared/types';

export const pagination = <T>({
    data,
    limit = 10,
    page = 1,
    totalData,
}: IPaginationOptions<T>): IDataPagination<T[]> => {
    if (limit < 5 || limit > 30) limit = 10;

    const totalPages: number = Math.ceil(totalData / limit);
    if (page > totalPages || page < 1) page = 1;

    const hasNextPage: boolean = page < totalPages;
    const hasPrevPage: boolean = page > 1;

    return {
        data,
        pagination: {
            totalData,
            currentPage: page,
            totalPages,
            hasNextPage,
            hasPrevPage,
        },
    };
};

export const getDataRange = (page: number, limit: number): [number, number] => {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    return [from, to];
};
