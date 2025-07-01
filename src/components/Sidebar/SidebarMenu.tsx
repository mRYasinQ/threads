import { cn } from '@/lib/utils/client';

import { MenuLineIcon } from '@/icons/MenuLineIcon';

export const SidebarMenu = () => {
    return (
        <div className="relative hidden md:block">
            <div
                className={cn(
                    'size-12 cursor-pointer stroke-gray-300 duration-200 hover:stroke-gray-900 dark:stroke-gray-700 dark:hover:stroke-gray-100',
                )}
            >
                <MenuLineIcon />
            </div>
        </div>
    );
};
