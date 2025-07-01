'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

import { Logo } from '../Logo';
import { SidebarMenu } from './SidebarMenu';

const Navbar = dynamic(() => import('../Navbar').then((module) => module.Navbar), { ssr: false });

export const Sidebar = () => {
    return (
        <div className="fixed bottom-0 left-0 z-10 flex h-fit w-full flex-col items-center justify-between bg-white/15 px-3 py-4 backdrop-blur-sm md:top-0 md:h-full md:w-[unset] md:bg-transparent md:backdrop-blur-none dark:bg-black/15 md:dark:bg-transparent">
            <div className="hidden md:block">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <Navbar />
            <SidebarMenu />
        </div>
    );
};
