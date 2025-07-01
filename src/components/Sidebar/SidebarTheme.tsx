'use client';

import { useContext } from 'react';

import { useAppDispatch } from '@/lib/hooks/redux';

import { ThemeContext } from '@/lib/context/Theme';

import { showMenu } from '@/lib/features/menu/menuSlice';

import { cn } from '@/lib/utils/client';

import Themes from '@/lib/constants/Themes';

import { ArrowLeftIcon } from '@/icons/ArrowLeftIcon';

export const SidebarTheme = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const dispatch = useAppDispatch();

    return (
        <div
            id="theme-menu"
            className="absolute top-0 left-0 flex h-fit w-80 -translate-y-full flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-xs dark:border-gray-800 dark:bg-gray-900"
        >
            <div className="flex items-center gap-2">
                <button
                    onClick={() => dispatch(showMenu())}
                    className="size-8 cursor-pointer stroke-gray-800 dark:stroke-gray-200"
                >
                    <ArrowLeftIcon />
                </button>
                <span className="text-base font-semibold text-gray-800 dark:text-gray-200">Appearance</span>
            </div>
            <div className="flex rounded-xl bg-gray-100 dark:bg-black">
                {Object.values(Themes).map(({ icon: Icon, value, label }) => (
                    <button
                        key={value}
                        onClick={() => setTheme(value)}
                        className={cn(
                            'flex w-full cursor-pointer justify-center stroke-gray-300 px-5 py-4 text-gray-300 dark:stroke-gray-700 dark:text-gray-700',
                            value === theme &&
                                'rounded-xl border border-gray-200 bg-white !stroke-gray-800 !text-gray-800 dark:border-gray-800 dark:bg-gray-900 dark:!stroke-gray-200 dark:!text-gray-200',
                        )}
                    >
                        {Icon ? (
                            <div className="size-6">{<Icon />}</div>
                        ) : (
                            <div className="text-sm font-semibold">{label}</div>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};
