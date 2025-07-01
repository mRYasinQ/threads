import type { SetStateAction } from 'react';

export interface IThemeContext {
    theme: Theme;
    setTheme: SetStateAction | null;
}

type Theme = 'system' | 'light' | 'dark' | null;
