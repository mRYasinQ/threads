import type { StatusCode } from '@/shared/types';

export interface IResponseBody<T> {
    message: string;
    data?: T | null;
}

export interface ICustomResponse<T> {
    ok: boolean;
    statusCode?: StatusCode;
    body: IResponseBody<T>;
}

export interface ICustomResponseArgs<T> extends Omit<ICustomResponse<T>, 'ok'> {
    statusCode?: StatusCode;
}
