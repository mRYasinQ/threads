import { supabase } from '../utils/server';
import AppError from '@/lib/exception/AppError';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { IRegisterBody, IUser } from '@/shared/types';

export const checkUserExistByEmail = async (email: string): Promise<boolean> => {
    const { data, error } = await supabase.from('users').select('id').eq('email', email).maybeSingle();
    if (!data || error) return false;

    return true;
};

export const getUserByEmail = async (email: string): Promise<IUser> => {
    const { data, error } = await supabase.from('users').select('*').eq('email', email).maybeSingle();
    if (!data || error) throw new AppError(Messages.LOGIN_DATA_INVALID, HttpStatusCode.UNAUTHORIZED);

    return data;
};

export const getUserById = async (id: string): Promise<IUser> => {
    const { data, error } = await supabase.from('users').select('*').eq('id', id).maybeSingle();
    if (!data || error) throw new AppError(Messages.USER_NOT_FOUND, HttpStatusCode.NOT_FOUND);

    return data;
};

export const addUser = async (data: Omit<IRegisterBody, 'confirm_password'>): Promise<boolean> => {
    const isUserExist = await checkUserExistByEmail(data.email);
    if (isUserExist) throw new AppError(Messages.REGISTERED_EMAIL, HttpStatusCode.CONFLICT);

    await supabase.from('users').insert(data);
    return true;
};
