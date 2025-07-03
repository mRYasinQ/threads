import api from './api';

import type {
    IAddPostBody,
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
        addPost: builder.mutation<ICustomResponse<void>, IAddPostBody>({
            query: (newPost) => ({
                url: '/posts',
                method: 'post',
                body: newPost,
            }),
            invalidatesTags: () => [{ type: 'Post', id: 'LIST' }],
        }),
        getPosts: builder.infiniteQuery<ICustomResponse<IPost[]>, undefined, number>({
            infiniteQueryOptions: {
                initialPageParam: 1,

                getNextPageParam: (lastPage, allPages, lastPageParam) => {
                    return lastPage.body.pagination?.hasNextPage ? lastPageParam + 1 : undefined;
                },
            },
            query: ({ pageParam }) => ({
                url: '/posts',
                method: 'get',
                params: {
                    page: pageParam,
                },
            }),
        }),
        getPostList: builder.query<ICustomResponse<IPost[]>, string>({
            query: (search: string) => ({
                url: '/posts',
                method: 'get',
                params: {
                    search,
                    limit: 10,
                },
            }),
        }),
        getPost: builder.query<ICustomResponse<IPost>, string>({
            query: (postId: string) => `/posts/${postId}`,
        }),
    }),
});

export default threadApi;
export const {
    useAddReportMutation,
    useRegisterMutation,
    useLoginMutation,
    useAddPostMutation,
    useGetPostsInfiniteQuery,
    useGetPostListQuery,
    useLazyGetPostListQuery,
    useGetPostQuery,
    useLazyGetPostQuery,
} = threadApi;
