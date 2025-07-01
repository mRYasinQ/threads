'use client';

import { createContext, useEffect, useMemo, useState } from 'react';

import Themes from '../constants/Themes';

import type { IThemeContext, Theme } from './types';

export const ThemeContext = createContext<IThemeContext>({ theme: null, setTheme: null });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(null);

    useEffect(() => {
        const savedTheme = (localStorage.getItem('theme') ?? null) as Theme;

        if (!theme) {
            if (savedTheme) {
                setTheme(savedTheme);
            } else {
                localStorage.setItem('theme', Themes.auto.value);
                setTheme(Themes.auto.value as Theme);
            }
            return;
        }

        localStorage.setItem('theme', theme);

        if (
            (theme === Themes.auto.value && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
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
