import { supabase } from '../utils/server';
import { pagination, getDataRange } from '@/lib/utils/server/pagination';
import AppError from '@/lib/exception/AppError';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { IPost, IAddPostBody, IPostsOptions, IDataPagination } from '@/shared/types';

export const getPosts = async ({ search, limit = 10, page = 1 }: IPostsOptions): Promise<IDataPagination<IPost[]>> => {
    const [from, to] = getDataRange(page, limit);

    const query = supabase
        .from('posts')
        .select(`*,author:users (id, full_name, email, joined_at)`, { count: 'exact' })
        .order('created_at', { ascending: false });

    if (search) query.ilike('content', `%${search}%`);

    const { data, count, error } = await query.range(from, to);
    if (error) throw new AppError(Messages.INTERNAL_SERVER, HttpStatusCode.INTERNAL_SERVER_ERROR);

    const result = pagination<IPost>({ data: data ?? [], limit, page, totalData: count ?? 0 });
    return result;
};

export const getPost = async (id: string): Promise<IPost> => {
    const { data, error } = await supabase
        .from('posts')
        .select(`*,author:users (id, full_name, email, joined_at)`)
        .eq('id', id)
        .maybeSingle();
    if (!data || error) throw new AppError(Messages.POST_NOT_FOUND, HttpStatusCode.NOT_FOUND);

    return data;
};

export const addPost = async (data: IAddPostBody): Promise<boolean> => {
    await supabase.from('posts').insert(data);
    return true;
};
