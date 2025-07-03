import { notFound } from 'next/navigation';

import { makeStore } from '@/store/store';
import threadApi from '@/store/services/threadsApi';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PostItem } from '@/store/features/post/PostItem';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Post • Threads',
    description: 'Threads post page.',
};

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;

    const store = makeStore();
    const { data: post } = await store.dispatch(threadApi.endpoints.getPost.initiate(postId));

    if (!post?.ok || !post?.body.data) notFound();

    return (
        <>
            <Header title="Post" />
            <div className="h-full overflow-y-auto border-gray-200 bg-white pt-16 lg:border-r lg:border-b lg:border-l lg:pt-0 dark:border-gray-800 dark:bg-gray-900">
                <PostItem post={post?.body.data} />
            </div>
            <Footer />
        </>
    );
}
