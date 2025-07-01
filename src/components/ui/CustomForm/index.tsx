'use client';

import Link from 'next/link';

import type { ICustomFormProps } from './types';

export const CustomForm = ({ title, onSubmit, children }: ICustomFormProps) => {
    return (
        <form onSubmit={onSubmit} className="fixed top-0 right-0 bottom-0 left-0 h-full w-full pt-4">
            <div className="relative bottom-0 mx-auto flex h-full w-full flex-col justify-end gap-4 px-4 sm:w-xl sm:px-0">
                <Link href="/" className="mx-auto w-fit">
                    <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">{title}</h1>
                </Link>
                <div className="overflow-y-scroll rounded-t-2xl border border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
                    <div className="flex flex-col gap-4">{children}</div>
                </div>
            </div>
        </form>
    );
};
