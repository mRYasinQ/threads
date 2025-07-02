'use client';

import { useAppSelector } from '@/lib/hooks/redux';

import { Button } from '@/components/ui/Button';

export const ActionButton = () => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    return (
        <div className="fixed top-6 right-6 z-10 hidden md:flex">
            {isAuthenticated ? (
                <Button href="/post/new" className="relative z-10">
                    New Post
                </Button>
            ) : (
                <Button href="/login" className="relative z-10">
                    Login
                </Button>
            )}
        </div>
    );
};
