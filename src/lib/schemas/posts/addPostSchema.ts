import { z } from 'zod';

const addPostSchema = z.object({
    content: z.string().min(3).trim(),
});

export default addPostSchema;
