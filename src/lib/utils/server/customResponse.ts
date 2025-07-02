import { NextResponse } from 'next/server';

import type { ICustomResponse, ICustomResponseOptions } from '@/shared/types';

export const CustomResponse = <T>({
    statusCode = 200,
    body,
}: ICustomResponseOptions<T>): NextResponse<ICustomResponse<T>> => {
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
