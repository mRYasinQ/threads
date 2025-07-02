'use client';

import { useEffect } from 'react';
import Cookies from 'js-cookie';

import { useAppDispatch } from '@/lib/hooks/redux';

import { setIsAuthenticated } from './authSlice';

export const AuthController = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const authenticatedStatus = Boolean(Cookies.get('userId'));

        dispatch(setIsAuthenticated({ authenticatedStatus }));
    });

    return children;
};
