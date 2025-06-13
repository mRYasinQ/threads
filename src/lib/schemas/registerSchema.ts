import zod from 'zod';

const registerSchema = zod
    .object({
        fullName: zod.string().min(4).max(60),
        email: zod.string().email(),
        password: zod.string().min(3),
        confirmPassword: zod.string().min(3),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Confirm password not match with password.',
        path: ['confirmPassword'],
    });

export default registerSchema;
