'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';
import { useNotif } from '@/lib/hooks/useNotif';

import { togglePostMenu } from '../menu/menuSlice';

import { Menu } from '@/components/Menu';
import { MenuItem } from '@/components/MenuItem';

import Messages from '@/lib/constants/Messages';

import { MoreIcon } from '@/components/icons/MoreIcon';
import { LinkIcon } from '@/components/icons/LinkIcon';

import type { IPostProps } from './types';

export const PostItem = ({ post: { id, author, content } }: IPostProps) => {
    const dispatch = useAppDispatch();
    const { activePostMenu } = useAppSelector((state) => state.menu);
    const { showNotif } = useNotif();

    const isOpen = activePostMenu === id;

    const toggleMenu = () => dispatch(togglePostMenu(id));
    const copyHandler = () => {
        navigator.clipboard.writeText(`${window.location.origin.toString()}/post/${id}`);
        toggleMenu();
        showNotif(Messages.COPY_SUCCESS, 'bottom');
    };

    return (
        <div className="flex gap-2 px-8 py-4">
            <div>
                <Image
                    src="/images/UserDefault.jpg"
                    width={40}
                    height={40}
                    alt="User Photo"
                    className="size-10 max-w-none rounded-full"
                />
            </div>
            <div className="flex w-full flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h5 className="w-fit text-lg font-semibold text-gray-800 dark:text-gray-200">{author}</h5>
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
                </div>
                <Link href={`/post/${id}`}>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">{content}</p>
                </Link>
            </div>
        </div>
    );
};
