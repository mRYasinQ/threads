import zod from 'zod';

const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(3),
});

export default loginSchema;
