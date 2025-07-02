'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '@/store/store';

import type { AppStore } from '@/store/store';

export const StoreProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const storerRef = useRef<AppStore>(undefined);
    storerRef.current ??= makeStore();

    return <Provider store={storerRef.current}>{children}</Provider>;
};
