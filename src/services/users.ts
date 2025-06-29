import crypto from 'crypto';

import { readData, writeData } from '@/lib/utils/server';
import AppError from '@/lib/exception/AppError';

import HttpStatusCode from '@/lib/constants/HttpStatusCode';
import Messages from '@/lib/constants/Messages';

import type { IUser } from '@/shared/types';

const USERS_FILE = 'users';

export const getAllUsers = async (): Promise<IUser[]> => {
    const users = await readData<IUser[]>(USERS_FILE);
    return users;
};

export const checkUserExistByEmail = async (email: string): Promise<boolean> => {
    const users = await getAllUsers();
    const isUserExist = Boolean(users.find((user) => user.email === email));
    return isUserExist;
};

export const getUserByEmail = async (email: string): Promise<IUser> => {
    const users = await getAllUsers();
    const user = users.find((user) => user.email === email);
    if (!user) throw new AppError(Messages.LOGIN_DATA_INVALID, HttpStatusCode.UNAUTHORIZED);
    return user;
};

export const getUserById = async (id: string): Promise<IUser> => {
    const users = await getAllUsers();
    const user = users.find((user) => user.id === id);
    if (!user) throw new AppError(Messages.USER_NOT_FOUND, HttpStatusCode.NOT_FOUND);
    return user;
};

export const addUser = async (data: Omit<IUser, 'id' | 'joinedAt'>): Promise<boolean> => {
    const isUserExist = await checkUserExistByEmail(data.email);
    if (isUserExist) throw new AppError(Messages.REGISTERED_EMAIL, HttpStatusCode.CONFLICT);

    const users = await getAllUsers();
    const newUser: IUser = {
        id: crypto.randomUUID(),
        ...data,
        joinedAt: new Date().toISOString(),
    };
    users.push(newUser);
    await writeData<IUser[]>(USERS_FILE, users);

    return true;
};
