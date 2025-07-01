'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CustomForm } from '../ui/CustomForm';
import { SubmitButton } from '../ui/SubmitButton';

import { addPostSchema } from '@/lib/schemas/posts';

export const NewPostForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(addPostSchema) });

    const newPostHandler = () => {
        console.log('Success.');
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
