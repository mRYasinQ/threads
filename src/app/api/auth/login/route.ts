import { getUserByEmail } from '@/services/users';

import { CustomResponse, validateData } from '@/lib/utils';
import AppError from '@/lib/exception/AppError';

import loginSchema from '@/lib/schemas/loginSchema';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { NextRequest, NextResponse } from 'next/server';
import type { IUser, ILoginBody } from '@/shared/types';

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body: ILoginBody = await req.json();

        validateData<ILoginBody>(loginSchema, body);
        const user = await getUserByEmail(body.email);

        if (user.password !== body.password) {
            throw new AppError(Messages.LOGIN_DATA_INVALID, HttpStatusCode.UNAUTHORIZED);
        }

        return CustomResponse<Pick<IUser, 'id'>>({
            body: { message: Messages.LOGIN_SUCCESS, data: { id: user.id } },
        });
    } catch (error) {
        if (error instanceof AppError) {
            if (error.isOperational) {
                return CustomResponse({ statusCode: error.statusCode, body: { message: error.message } });
            }
        }

        return CustomResponse({
            statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
            body: { message: Messages.INTERNAL_SERVER },
        });
    }
}
