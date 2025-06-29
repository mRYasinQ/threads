import { z } from 'zod';

const registerSchema = z
    .object({
        fullName: z.string().min(4).max(60),
        email: z.string().email(),
        password: z.string().min(3),
        confirmPassword: z.string().min(3),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Confirm password not match with password.',
        path: ['confirmPassword'],
    });

export default registerSchema;
