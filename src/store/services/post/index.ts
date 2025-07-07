import api from '../api';

import type { IGetPostsQueryArg } from './types';
import type { IAddPostInput, ICustomResponse, IPost } from '@/shared/types';

const postApi = api.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
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

export default postApi;
export const { useAddPostMutation, useGetPostsQuery, useLazyGetPostQuery, useGetPostQuery, useLazyGetPostsQuery } =
    postApi;
