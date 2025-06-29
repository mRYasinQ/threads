import { addPost, getPosts } from '@/services/posts';

import { checkAuth } from '@/lib/guard/auth';

import { CustomResponse, validateData } from '@/lib/utils/server';
import AppError from '@/lib/exception/AppError';

import { addPostSchema, postsQuerySchema } from '@/lib/schemas/posts';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { NextRequest, NextResponse } from 'next/server';
import type { IPost, IAddPostBody, IPostsOptions } from '@/shared/types';

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        const searchParams = req.nextUrl.searchParams;
        const search = searchParams.get('search') ?? undefined;
        const limit = Number(searchParams.get('limit')) || 10;
        const page = Number(searchParams.get('page')) || 1;

        const queries: IPostsOptions = { search, limit, page };

        validateData<IPostsOptions>(postsQuerySchema, queries);
        const { data, pagination } = await getPosts(queries);

        return CustomResponse<IPost[]>({ statusCode: HttpStatusCode.OK, body: { data, pagination } });
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

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const user = await checkAuth(req);
        if (!user) throw new AppError(Messages.INVALID_TOKEN, HttpStatusCode.UNAUTHORIZED);

        const body: IAddPostBody = await req.json();

        validateData<IAddPostBody>(addPostSchema, body);
        await addPost({ ...body, author: user.fullName });

        return CustomResponse({ statusCode: HttpStatusCode.CREATED, body: { message: Messages.POST_CREATED } });
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
