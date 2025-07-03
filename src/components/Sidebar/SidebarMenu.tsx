'use client';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';

import { toggleMenu, exitMenu, showThemeMenu } from '@/store/features/menu/menuSlice';
import { showReportModal } from '@/store/features/report/reportSlice';

import { Menu } from '../Menu';
import { MenuItem } from '../MenuItem';
import { SidebarTheme } from './SidebarTheme';

import { cn } from '@/lib/utils/client';

import { MenuLineIcon } from '@/components/icons/MenuLineIcon';
import { DirectionRightIcon } from '@/components/icons/DirectionRightIcon';

export const SidebarMenu = () => {
    const dispatch = useAppDispatch();
    const { activeSidebarMenu, activeThemeMenu } = useAppSelector((state) => state.menu);

    const showReportModalHandler = () => {
        dispatch(exitMenu());
        dispatch(showReportModal());
    };

    return (
        <div className="relative hidden lg:block">
            <button
                id="menu"
                className={cn(
                    'size-12 cursor-pointer stroke-gray-300 duration-200 hover:stroke-gray-900 dark:stroke-gray-700 dark:hover:stroke-gray-100',
                    activeSidebarMenu && '!stroke-gray-900 dark:!stroke-gray-100',
                )}
                onClick={() => dispatch(toggleMenu())}
            >
                <MenuLineIcon />
            </button>
            {activeSidebarMenu && !activeThemeMenu && (
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
