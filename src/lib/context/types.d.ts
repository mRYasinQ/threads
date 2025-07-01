export interface IThemeContext {
    theme: Theme;
    setTheme: React.SetStateAction;
}

type Theme = 'system' | 'light' | 'dark' | undefined;
