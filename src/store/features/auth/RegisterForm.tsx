'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useRegisterMutation } from '@/store/services/auth';
import { useNotif } from '@/lib/hooks/useNotif';

import { CustomForm } from '../../../components/ui/CustomForm';
import { Input } from '../../../components/ui/Input';
import { SubmitButton } from '../../../components/ui/SubmitButton';

import registerSchema from '@/lib/schemas/registerSchema';

import RegisterFields from '@/lib/constants/Fields/RegisterFields';
import Messages from '@/lib/constants/Messages';

import type { ICustomResponse, IRegisterBody } from '@/shared/types';

export const RegisterForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IRegisterBody>({ resolver: zodResolver(registerSchema) });

    const [registerUSer] = useRegisterMutation();
    const { showNotif } = useNotif();

    const registerHandler = async (data: IRegisterBody) => {
        try {
            const response = await registerUSer(data).unwrap();

            showNotif(response.body.message ?? Messages.REGISTER_SUCCESS, 'top');
            router.push('/login');
        } catch (error) {
            if (error && typeof error === 'object' && 'data' in error) {
                const errorMessage = (error.data as ICustomResponse<void>).body.message ?? Messages.INTERNAL_SERVER;
                showNotif(errorMessage, 'top');
            } else {
                showNotif(Messages.INTERNAL_SERVER, 'top');
            }
        }
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
