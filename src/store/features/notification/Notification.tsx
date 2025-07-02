'use client';

import { cn } from '@/lib/utils/client';

import type { INotificationProps } from './types';

export const Notification = ({ message, location = 'bottom', onClick }: INotificationProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                'fixed left-1/2 z-30 w-full -translate-x-1/2 cursor-pointer px-4 sm:w-fit sm:px-0',
                location === 'bottom' ? 'bottom-4' : 'top-4',
            )}
        >
            <div className="w-full rounded-xl bg-gray-900 px-5 py-3 dark:bg-white">
                <p className="text-base font-semibold text-gray-200 dark:text-gray-800">{message}</p>
            </div>
        </button>
    );
};
