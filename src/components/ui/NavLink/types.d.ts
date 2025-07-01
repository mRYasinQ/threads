import type { MouseEventHandler, ReactNode } from 'react';
import type { ClassValue } from 'clsx';

export interface INavLinkProps {
    href: string;
    onClick?: MouseEventHandler;
    className?: ClassValue;
    children: ReactNode;
}
