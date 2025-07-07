import api from '../api';

import type { ICustomResponse, ILoginBody, IRegisterBody, IUser } from '@/shared/types';

const authApi = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
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
    }),
});

export default authApi;
export const { useRegisterMutation, useLoginMutation } = authApi;
