'use client';

import { NavItem } from './NavItem';

import NavLinks from '@/lib/constants/NavLinks';

export const Navbar = () => {
    return (
        <nav className="flex w-full items-center gap-6 lg:w-auto lg:flex-col">
            {NavLinks.map(({ icon: Icon, link }) => (
                <NavItem key={window.crypto.randomUUID()} href={link} icon={Icon} />
            ))}
        </nav>
    );
};
