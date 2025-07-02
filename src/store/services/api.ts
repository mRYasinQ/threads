import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const baseQuery = fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
        const userId = Cookies.get('userId');
        if (userId) headers.set('Authorization', `Bearer ${userId}`);
    },
});

const baseQueryWithRetries = retry(baseQuery, { maxRetries: 3 });

const api = createApi({
    reducerPath: 'threadApi',
    baseQuery: baseQueryWithRetries,
    tagTypes: ['Post'],
    endpoints: () => ({}),
});

export default api;
export { baseQuery, baseQueryWithRetries };
