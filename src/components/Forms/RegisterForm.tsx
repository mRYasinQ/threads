'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../ui/CustomForm';
import { Input } from '../ui/Input';
import { SubmitButton } from '../ui/SubmitButton';

import registerSchema from '@/lib/schemas/registerSchema';

import RegisterFields from '@/lib/constants/Fields/RegisterFields';

import type { IRegisterBody } from '@/shared/types';

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterBody>({ resolver: zodResolver(registerSchema) });

    const registerHandler = () => {
        console.log('Success.');
    };

    return (
        <CustomForm title="Register" onSubmit={handleSubmit(registerHandler)}>
            {RegisterFields.map(({ id, title, placeholder, type, registerType }) => (
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
            <SubmitButton>Register</SubmitButton>
            <p className="text-center text-sm text-gray-800 dark:text-gray-200">
                Have account?{' '}
                <Link href="/login" className="font-semibold">
                    Login
                </Link>
            </p>
        </CustomForm>
    );
};
