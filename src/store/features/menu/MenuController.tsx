'use client';

import { useEffect } from 'react';

import { useAppDispatch } from '@/lib/hooks/redux';

import { resetMenu } from './menuSlice';

export const MenuController = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const resetMenuHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            if (!target.closest('#menu') && !target.closest('#theme-menu')) {
                dispatch(resetMenu());
            }
        };

        document.addEventListener('click', resetMenuHandler);

        return () => document.removeEventListener('click', resetMenuHandler);
    }, [dispatch]);

    return children;
};
