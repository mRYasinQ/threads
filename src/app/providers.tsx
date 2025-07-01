import ThemeProvider from '@/lib/context/Theme';
import { StoreProvider } from '@/components/StoreProvider';

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ThemeProvider>
            <StoreProvider>{children}</StoreProvider>
        </ThemeProvider>
    );
}
