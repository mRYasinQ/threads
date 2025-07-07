'use client';

import Link from 'next/link';
import { useIsClient } from 'usehooks-ts';

import { Logo } from '../Logo';
import { SidebarMenu } from './SidebarMenu';
import { Navbar } from '../Navbar';

export const Sidebar = () => {
    const isClient = useIsClient();

    if (!isClient) return;

    return (
        <div className="fixed bottom-0 left-0 z-10 flex h-fit w-full flex-col items-center justify-between bg-white/15 px-3 py-4 backdrop-blur-sm lg:top-0 lg:h-full lg:w-[unset] lg:bg-transparent lg:backdrop-blur-none dark:bg-black/15 lg:dark:bg-transparent">
            <div className="hidden lg:block">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <Navbar />
            <SidebarMenu />
        </div>
    );
};
