import Link from 'next/link';

import { Logo } from '../Logo';
import { ActionButton } from '@/store/features/auth/ActionButton';

import type { IHeaderProps } from './types';

export const Header = ({ title }: IHeaderProps) => {
    return (
        <div className="fixed top-0 z-10 flex h-16 w-full items-center justify-between bg-white/85 px-4 backdrop-blur-xl lg:sticky lg:w-[unset] lg:flex-col lg:items-stretch lg:justify-center lg:bg-gray-100 lg:px-0 lg:backdrop-blur-none dark:bg-gray-900/85 lg:dark:bg-black">
            <h1 className="hidden py-6 text-center text-base font-semibold text-gray-900 lg:inline-block dark:text-gray-100">
                {title}
            </h1>
            <div className="relative flex w-full items-center justify-between sm:justify-center lg:hidden">
                <Link href="/">
                    <Logo />
                </Link>
                <div className="right-0 flex w-fit sm:absolute">
                    <ActionButton />
                </div>
            </div>
            <div className="hidden items-center lg:flex">
                <div className="absolute bottom-0 h-0 w-full px-8">
                    <div className="border-t border-gray-200 dark:border-gray-800"></div>
                </div>
                <div className="absolute bottom-[-1.5rem] left-0 size-6 bg-gray-100 before:absolute before:left-0 before:size-8 before:rounded-tl-2xl before:border-t before:border-l before:border-gray-200 before:bg-white dark:bg-black dark:before:border-gray-800 dark:before:bg-gray-900"></div>
                <div className="absolute right-0 bottom-[-1.5rem] size-6 bg-gray-100 before:absolute before:right-0 before:size-8 before:rounded-tr-2xl before:border-t before:border-r before:border-gray-200 before:bg-white dark:bg-black dark:before:border-gray-800 dark:before:bg-gray-900"></div>
            </div>
        </div>
    );
};
