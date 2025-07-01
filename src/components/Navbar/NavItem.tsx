'use client';

import { NavLink } from '../ui/NavLink';

import type { INavItemProps } from './types';

export const NavItem = ({ href, icon: Icon }: INavItemProps) => {
    return (
        <NavLink
            href={href}
            className="group flex w-full justify-center rounded-lg px-4 py-2 duration-200 hover:bg-gray-200/60 md:w-auto dark:hover:bg-gray-800/60"
        >
            <div className="size-7 fill-none stroke-gray-300 group-[.active]:fill-gray-900 group-[.active]:stroke-gray-900 dark:stroke-gray-700 group-[.active]:dark:fill-gray-100 group-[.active]:dark:stroke-gray-100">
                <Icon />
            </div>
        </NavLink>
    );
};
