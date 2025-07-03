import type { ReactNode } from 'react';
import type { RootState } from '@/store';

export interface IStoreProviderProps {
    children: ReactNode;
    preloadedState?: RootState;
}
