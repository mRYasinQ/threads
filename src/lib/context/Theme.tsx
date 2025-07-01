'use client';

import { createContext, useEffect, useMemo, useState } from 'react';

import Themes from '../constants/Themes';

import type { IThemeContext, Theme } from './types';

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(undefined);

    useEffect(() => {
        const savedTheme = (localStorage.getItem('theme') ?? undefined) as Theme;

        if (!theme) {
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                localStorage.setItem('theme', Themes.system.value);
                setTheme(Themes.system.value as Theme);
            }
            return;
        }

        localStorage.setItem('theme', theme);

        if (
            (theme === Themes.system.value && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
            theme === Themes.dark.value
        ) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const themeData = useMemo(() => ({ theme, setTheme }), [theme]);

    return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
