import type { ReactNode } from 'react';
import type { ClassValue } from 'clsx';

export interface IButtonProps {
    href: string;
    className?: ClassValue;
    children: ReactNode;
}
