import { RegisterForm } from '@/store/features/auth/RegisterForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register • Threads',
    description: 'Threads register page.',
};

export default function RegisterPage() {
    return <RegisterForm />;
}
