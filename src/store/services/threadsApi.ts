import api from './api';

import type { IGetPostsQueryArg } from './types';
import type {
    IAddPostInput,
    IAddReportBody,
    ICustomResponse,
    ILoginBody,
    IPost,
    IRegisterBody,
    IUser,
} from '@/shared/types';

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
        addPost: builder.mutation<ICustomResponse<void>, IAddPostInput>({
            query: (newPost) => ({
                url: '/posts',
                method: 'post',
                body: newPost,
            }),
            invalidatesTags: ['Post'],
        }),
        getPosts: builder.query<ICustomResponse<IPost[]>, IGetPostsQueryArg>({
            query: ({ page, search, limit }) => ({
                url: '/posts',
                method: 'get',
                params: {
                    search,
                    page,
                    limit,
                },
            }),
            providesTags: ['Post'],
        }),
        getPost: builder.query<ICustomResponse<IPost>, string>({
            query: (postId: string) => `/posts/${postId}`,
            providesTags: ['Post'],
        }),
    }),
});

export default threadApi;
export const {
    useAddReportMutation,
    useRegisterMutation,
    useLoginMutation,
    useAddPostMutation,
    useGetPostsQuery,
    useLazyGetPostsQuery,
    useGetPostQuery,
    useLazyGetPostQuery,
} = threadApi;
