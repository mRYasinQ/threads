'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Cookies from 'js-cookie';

import { useAppDispatch } from '@/lib/hooks/redux';
import { useLoginMutation } from '@/store/services/threadsApi';
import { useNotif } from '@/lib/hooks/useNotif';

import { setIsAuthenticated } from './authSlice';

import { CustomForm } from '../../../components/ui/CustomForm';
import { Input } from '../../../components/ui/Input';
import { SubmitButton } from '../../../components/ui/SubmitButton';

import loginSchema from '@/lib/schemas/loginSchema';

import LoginFields from '@/lib/constants/Fields/LoginFields';
import Messages from '@/lib/constants/Messages';

import type { ICustomResponse, ILoginBody } from '@/shared/types';

export const LoginForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const dispatch = useAppDispatch();
    const [loginUser] = useLoginMutation();
    const { showNotif } = useNotif();

    const loginHandler = async (data: ILoginBody) => {
        try {
            const response = await loginUser(data).unwrap();

            const userId = response.body.data?.id;
            if (!userId) throw new Error();

            Cookies.set('userId', userId)
            dispatch(setIsAuthenticated({ authenticatedStatus: true }));

            showNotif(response.body.message ?? Messages.LOGIN_SUCCESS, 'bottom');
            router.push('/');
            router.refresh();
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
