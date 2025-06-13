import { NextResponse } from 'next/server';

import type { ICustomResponse, ICustomResponseArgs } from './types';

export const CustomResponse = <T>({
    statusCode = 200,
    body,
}: ICustomResponseArgs<T>): NextResponse<ICustomResponse<T>> => {
    const ok: boolean = statusCode >= 200 && statusCode <= 299;

    return NextResponse.json(
        {
            ok,
            statusCode,
            body,
        },
        { status: statusCode },
    );
};
