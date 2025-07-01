'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';

import { toggleMenu, exitMenu, showThemeMenu } from '@/lib/features/menu/menuSlice';
import { showReportModal } from '@/lib/features/report/reportSlice';

import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { SidebarTheme } from './SidebarTheme';

import { cn } from '@/lib/utils/client';

import { MenuLineIcon } from '@/icons/MenuLineIcon';
import { DirectionRightIcon } from '@/icons/DirectionRightIcon';

export const SidebarMenu = () => {
    const dispatch = useAppDispatch();
    const { activeMenu, activeThemeMenu } = useAppSelector((state) => state.menu);

    const showReportModalHandler = () => {
        dispatch(exitMenu());
        dispatch(showReportModal());
    };

    return (
        <div className="relative hidden md:block">
            <button
                id="menu"
                className={cn(
                    'size-12 cursor-pointer stroke-gray-300 duration-200 hover:stroke-gray-900 dark:stroke-gray-700 dark:hover:stroke-gray-100',
                    (activeMenu || activeThemeMenu) && '!stroke-gray-900 dark:!stroke-gray-100',
                )}
                onClick={() => dispatch(toggleMenu())}
            >
                <MenuLineIcon />
            </button>
            {activeMenu && !activeThemeMenu && (
                <Menu>
                    <MenuItem
                        text="Appearance"
                        icon={<DirectionRightIcon />}
                        onClick={() => dispatch(showThemeMenu())}
                    />
                    <MenuItem text="Report a problem" onClick={showReportModalHandler} />
                </Menu>
            )}
            {activeThemeMenu && <SidebarTheme />}
        </div>
    );
};
