import { LoginForm } from '@/store/features/auth/LoginForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login • Threads',
    description: 'Threads login page.',
};

export default function LoginPage() {
    return <LoginForm />;
}
