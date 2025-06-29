import { z } from 'zod';

const postsQuerySchema = z.object({
    search: z.string().trim().min(3).optional(),
    limit: z.number().int().positive().min(5).max(30).optional(),
    page: z.number().int().positive().min(1).optional(),
});

export default postsQuerySchema;
