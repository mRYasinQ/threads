import api from './api';

import type { IAddPostBody, IAddReportBody, ICustomResponse, ILoginBody, IRegisterBody, IUser } from '@/shared/types';

const threadApi = api.injectEndpoints({
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
        login: builder.mutation<ICustomResponse<Pick<IUser, 'id'>>, ILoginBody>({
            query: (newUser) => ({
                url: '/auth/login',
                method: 'post',
                body: newUser,
            }),
        }),
        addPost: builder.mutation<ICustomResponse<void>, IAddPostBody>({
            query: (newPost) => ({
                url: '/posts',
                method: 'post',
                body: newPost,
            }),
            invalidatesTags: (result) => [{ type: 'Post', id: 'LIST' }],
        }),
    }),
});

export default threadApi;
export const { useAddReportMutation, useRegisterMutation, useLoginMutation, useAddPostMutation } = threadApi;
