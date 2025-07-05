import Link from 'next/link';

import { toRelativeTime } from '@/lib/utils/client';

import type { IRowResultProps } from './types';

export const RowResult = ({ post: { id, content, author, created_at } }: IRowResultProps) => {
    return (
        <Link href={`/post/${id}`} className="flex flex-col gap-1 px-8 py-4">
            <div className="flex items-center gap-1">
                <h5 className="w-fit text-base font-medium text-gray-800 dark:text-gray-200">{author.full_name}</h5>
                <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{toRelativeTime(created_at)}</span>
            </div>
            <p className="line-clamp-1 text-base text-gray-700 dark:text-gray-300">{content}</p>
        </Link>
    );
};
