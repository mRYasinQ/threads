'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '@/store/store';

import type { IStoreProviderProps } from './types';
import type { AppStore } from '@/store/store';

export const StoreProvider = ({ children, preloadedState }: IStoreProviderProps) => {
    const storerRef = useRef<AppStore>(undefined);
    storerRef.current ??= makeStore(preloadedState);

    return <Provider store={storerRef.current}>{children}</Provider>;
};
