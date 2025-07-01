import type { IFields } from '../types';
import type { IRegisterBody } from '@/shared/types';

const RegisterFields: IFields<IRegisterBody>[] = [
    {
        title: 'Full Name',
        id: 'fullName',
        registerType: 'fullName',
        type: 'text',
        placeholder: 'Enter your full name...',
    },
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
    {
        title: 'Confirm Password',
        id: 'confirmPassword',
        registerType: 'confirmPassword',
        type: 'password',
        placeholder: 'Enter your confirm password...',
    },
];

export default RegisterFields;
