import type { StatusCode, IPagination } from '@/shared/types';

export interface IResponseBody<T> {
    data?: T;
    pagination?: IPagination;
    message?: string;
}

export interface ICustomResponse<T> {
    ok: boolean;
    statusCode?: StatusCode;
    body: IResponseBody<T>;
}

export interface ICustomResponseOptions<T> extends Omit<ICustomResponse<T>, 'ok'> {
    statusCode?: StatusCode;
}
