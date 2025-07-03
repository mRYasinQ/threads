import { ThreadsIcon } from '@/components/icons/ThreadsIcon';

export default function Loading() {
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="size-18 text-gray-900 dark:text-gray-100">
                <ThreadsIcon />
            </div>
        </div>
    );
}
