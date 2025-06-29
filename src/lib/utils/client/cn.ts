import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export const cn = (...classNames: ClassValue[]) => twMerge(clsx(classNames));
