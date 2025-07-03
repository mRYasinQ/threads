import Link from 'next/link';

import type { IRowResultProps } from './types';

export const RowResult = ({ post: { id, content, author } }: IRowResultProps) => {
    return (
        <Link href={`/post/${id}`} className="flex flex-col gap-1 px-8 py-4">
            <h5 className="w-fit text-base font-semibold text-gray-800 dark:text-gray-200">{author}</h5>
            <p className="line-clamp-1 text-base font-medium text-gray-700 dark:text-gray-300">{content}</p>
        </Link>
    );
};
