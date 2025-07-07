'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useAddPostMutation } from '@/store/services/post';
import { useNotif } from '@/lib/hooks/useNotif';

import { CustomForm } from '../../../components/ui/CustomForm';
import { SubmitButton } from '../../../components/ui/SubmitButton';

import { addPostSchema } from '@/lib/schemas/posts';

import Messages from '@/lib/constants/Messages';

import type { ICustomResponse, IAddPostInput } from '@/shared/types';

export const NewPostForm = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(addPostSchema) });

    const [addPost] = useAddPostMutation();
    const { showNotif } = useNotif();

    const newPostHandler = async (data: IAddPostInput) => {
        try {
            const response = await addPost(data);

            showNotif(response.data?.body.message ?? Messages.POST_CREATED, 'bottom');
            router.push('/');
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
        <CustomForm title="New Post" onSubmit={handleSubmit(newPostHandler)}>
            <div className="flex flex-col gap-2">
                <label htmlFor="content" className="text-base font-semibold text-gray-800 dark:text-gray-200">
                    Content
                </label>
                <textarea
                    className="h-52 resize-none rounded-xl border border-gray-200 px-4 py-2 text-base font-medium text-gray-900 outline-none placeholder:text-gray-300 dark:border-gray-800 dark:text-gray-100 dark:placeholder:text-gray-700"
                    placeholder="Enter post content..."
                    id="content"
                    {...register('content')}
                ></textarea>
                {errors.content?.message && (
                    <p className="text-sm font-medium text-red-500">{errors.content.message}</p>
                )}
            </div>
            <SubmitButton>Publish</SubmitButton>
        </CustomForm>
    );
};
