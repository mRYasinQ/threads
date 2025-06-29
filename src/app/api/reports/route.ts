import { addReport } from '@/services/reports';

import { CustomResponse, validateData } from '@/lib/utils/server';
import AppError from '@/lib/exception/AppError';

import { addReportSchema } from '@/lib/schemas/reports';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { NextRequest, NextResponse } from 'next/server';
import type { IAddReportBody } from '@/shared/types';

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const body: IAddReportBody = await req.json();

        validateData<IAddReportBody>(addReportSchema, body);
        await addReport(body);

        return CustomResponse({ statusCode: HttpStatusCode.CREATED, body: { message: Messages.ADD_REPORT_SUCCESS } });
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
