import api from '../api';

import type { IAddReportBody, ICustomResponse } from '@/shared/types';

const reportApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addReport: builder.mutation<ICustomResponse<void>, IAddReportBody>({
            query: (newReport) => ({
                url: '/reports',
                method: 'post',
                body: newReport,
            }),
        }),
    }),
});

export default reportApi;
export const { useAddReportMutation } = reportApi;
