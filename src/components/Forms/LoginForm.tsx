'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../ui/CustomForm';
import { Input } from '../ui/Input';
import { SubmitButton } from '../ui/SubmitButton';

import loginSchema from '@/lib/schemas/loginSchema';

import LoginFields from '@/lib/constants/Fields/LoginFields';

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const loginHandler = () => {
        console.log('Success.');
    };

    return (
        <CustomForm title="Login" onSubmit={handleSubmit(loginHandler)}>
            {LoginFields.map(({ id, title, placeholder, type, registerType }) => (
                <Input
                    key={id}
                    id={id}
                    title={title}
                    placeholder={placeholder}
                    type={type}
                    errorMessage={errors[registerType]?.message}
                    {...register(registerType)}
                />
            ))}
            <SubmitButton>Login</SubmitButton>
            <p className="text-center text-sm text-gray-800 dark:text-gray-200">
                Don't have account?{' '}
                <Link href="/register" className="font-semibold">
                    Register
                </Link>
            </p>
        </CustomForm>
    );
};
