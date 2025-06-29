import { z } from 'zod';

const addReportSchema = z.object({
    message: z.string().min(5),
});

export default addReportSchema;
