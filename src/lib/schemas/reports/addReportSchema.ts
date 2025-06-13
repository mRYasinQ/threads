import zod from 'zod';

const addReportSchema = zod.object({
    message: zod.string().min(5),
});

export default addReportSchema;
