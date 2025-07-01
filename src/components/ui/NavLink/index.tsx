'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils/client';

import type { INavLinkProps } from './types';

export const NavLink = ({ href, className, children }: INavLinkProps) => {
    const pathname = usePathname();

    const isActive = pathname.endsWith(href) || (href.includes(pathname) && pathname !== '/');

    return (
        <Link href={href} className={cn(isActive && 'active', className)}>
            {children}
        </Link>
    );
};
