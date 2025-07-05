import { z } from 'zod';

const registerSchema = z
    .object({
        full_name: z.string().min(4).max(60),
        email: z.string().email(),
        password: z.string().min(3),
        confirm_password: z.string().min(3),
    })
    .refine((data) => data.password === data.confirm_password, {
        message: 'Confirm password not match with password.',
        path: ['confirmPassword'],
    });

export default registerSchema;
