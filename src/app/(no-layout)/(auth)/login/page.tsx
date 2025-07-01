import { LoginForm } from '@/components/Forms/LoginForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login • Threads',
    description: 'Threads login page.',
};

export default function LoginPage() {
    return <LoginForm />;
}
