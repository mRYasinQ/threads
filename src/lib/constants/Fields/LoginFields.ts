import type { IFields } from '../types';
import type { ILoginBody } from '@/shared/types';

const LoginFields: IFields<ILoginBody>[] = [
    {
        title: 'Email',
        id: 'email',
        registerType: 'email',
        type: 'text',
        placeholder: 'Enter your email...',
    },
    {
        title: 'Password',
        id: 'password',
        registerType: 'password',
        type: 'password',
        placeholder: 'Enter your password...',
    },
];

export default LoginFields;
