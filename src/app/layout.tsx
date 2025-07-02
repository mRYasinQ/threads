import '@/styles/app.css';

import Providers from './providers';
import { AuthController } from '@/store/features/auth/AuthController';
import { NotificationController } from '@/store/features/notification/NotificationController';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <AuthController>
                        <NotificationController>{children}</NotificationController>
                    </AuthController>
                </Providers>
            </body>
        </html>
    );
}
