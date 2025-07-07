import api from '../api';

import type { IAddReportBody, ICustomResponse, IRegisterBody } from '@/shared/types';

const reportApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addReport: builder.mutation<ICustomResponse<void>, IAddReportBody>({
            query: (newReport) => ({
                url: '/reports',
                method: 'post',
                body: newReport,
            }),
        }),
        register: builder.mutation<ICustomResponse<void>, IRegisterBody>({
            query: (newUser) => ({
                url: '/auth/register',
                method: 'post',
                body: newUser,
            }),
        }),
    }),
});

export default reportApi;
export const { useAddReportMutation } = reportApi;
