export interface IPagination {
    totalData: number;
    currentPage: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}

export interface IDataPagination<T> {
    data: T;
    pagination: IPagination;
}

export interface IPaginationOptions<T> {
    data: T[];
    limit?: number;
    page?: number;
    totalData: number;
}
