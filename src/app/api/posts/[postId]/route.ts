import { getPost } from '@/services/posts';

import { CustomResponse } from '@/lib/utils';
import AppError from '@/lib/exception/AppError';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { NextRequest, NextResponse } from 'next/server';
import type { IPost } from '@/shared/types';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ postId: string }> },
): Promise<NextResponse> {
    try {
        const { postId } = await params;

        const post = await getPost(postId);

        return CustomResponse<IPost>({ body: { data: post } });
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
