import { ZodError } from 'zod';

import AppError from '../../exception/AppError';

import HttpStatusCode from '../../constants/HttpStatusCode';
import Messages from '../../constants/Messages';

import type { ZodSchema } from 'zod';

export const validateData = <T>(schema: ZodSchema, data: T): boolean => {
    try {
        schema.parse(data);

        return true;
    } catch (error) {
        if (error instanceof ZodError) {
            throw new AppError(error.issues[0].message, HttpStatusCode.BAD_REQUEST);
        }

        throw new AppError(Messages.INTERNAL_SERVER, HttpStatusCode.INTERNAL_SERVER_ERROR);
    }
};
