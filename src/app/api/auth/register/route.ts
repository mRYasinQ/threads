import { addUser } from '@/services/users';

import { CustomResponse, validateData } from '@/lib/utils';
import AppError from '@/lib/exception/AppError';

import registerSchema from '@/lib/schemas/registerSchema';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { NextRequest, NextResponse } from 'next/server';
import type { IRegisterBody } from '@/shared/types';

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body: IRegisterBody = await req.json();

        validateData<IRegisterBody>(registerSchema, body);
        await addUser(body);

        return CustomResponse({ statusCode: HttpStatusCode.CREATED, body: { message: Messages.REGISTER_SUCCESS } });
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
