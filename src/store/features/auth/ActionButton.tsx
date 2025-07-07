'use client';

import { useIsClient } from 'usehooks-ts';

import { useAppSelector } from '@/lib/hooks/redux';

import { Button } from '@/components/ui/Button';

export const ActionButton = () => {
    const isClient = useIsClient();

    const { isAuthenticated } = useAppSelector((state) => state.auth);

    if (!isClient) return;

    return isAuthenticated ? (
        <Button href="/post/new" className="relative z-10">
            New Post
        </Button>
    ) : (
        <Button href="/login" className="relative z-10">
            Login
        </Button>
    );
};
