'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '@/store';

import type { IStoreProviderProps } from './types';
import type { AppStore } from '@/store';

export const StoreProvider = ({ children, preloadedState }: IStoreProviderProps) => {
    const storeRef = useRef<AppStore>(undefined);
    storeRef.current ??= makeStore(preloadedState);

    return <Provider store={storeRef.current}>{children}</Provider>;
};
