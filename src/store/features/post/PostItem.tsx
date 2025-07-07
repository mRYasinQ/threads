import Link from 'next/link';
import Image from 'next/image';

import { PostMenu } from './PostMenu';

import { toRelativeTime } from '@/lib/utils/client';

import type { IPostProps } from './types';

export const PostItem = ({ post: { id, author, content, created_at } }: IPostProps) => {
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
                    <div className="flex items-center gap-1">
                        <h5 className="w-fit text-lg font-medium text-gray-800 dark:text-gray-200">
                            {author.full_name}
                        </h5>
                        <span className="text-sm text-gray-600 dark:text-gray-400">•</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">{toRelativeTime(created_at)}</span>
                    </div>
                    <PostMenu postId={id} />
                </div>
                <Link href={`/post/${id}`}>
                    <p className="text-base font-normal text-gray-700 dark:text-gray-300">{content}</p>
                </Link>
            </div>
        </div>
    );
};
