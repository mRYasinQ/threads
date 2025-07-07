'use client';

import { useCopyToClipboard } from 'usehooks-ts';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { useNotif } from '@/lib/hooks/useNotif';

import { togglePostMenu } from '../menu/menuSlice';

import { Menu } from '@/components/Menu';
import { MenuItem } from '@/components/MenuItem';

import Messages from '@/lib/constants/Messages';

import { MoreIcon } from '@/components/icons/MoreIcon';
import { LinkIcon } from '@/components/icons/LinkIcon';

import type { IPostMenuProps } from './types';

export const PostMenu = ({ postId }: IPostMenuProps) => {
    const [, copy] = useCopyToClipboard();

    const dispatch = useAppDispatch();
    const { activePostMenu } = useAppSelector((state) => state.menu);
    const { showNotif } = useNotif();

    const isOpen = activePostMenu === postId;

    const toggleMenu = () => dispatch(togglePostMenu(postId));
    const copyHandler = async () => {
        await copy(`${window.location.origin.toString()}/post/${postId}`);
        toggleMenu();
        showNotif(Messages.COPY_SUCCESS, 'bottom');
    };

    return (
        <div id="menu" className="relative">
            <button
                onClick={toggleMenu}
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-gray-400 duration-200 hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800"
            >
                <MoreIcon />
            </button>
            {isOpen && (
                <Menu className="right-0 left-[unset] translate-y-1/2">
                    <MenuItem text="Copy link" icon={<LinkIcon />} onClick={copyHandler} />
                </Menu>
            )}
        </div>
    );
};
