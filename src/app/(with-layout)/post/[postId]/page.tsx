import { notFound } from 'next/navigation';

import { makeStore } from '@/store';
import postApi from '@/store/services/post';

import { MainLayout } from '@/components/MainLayout';
import { PostItem } from '@/store/features/post/PostItem';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Post • Threads',
    description: 'Threads post page.',
};

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
    const { postId } = await params;

    const store = makeStore();
    const post = await store.dispatch(postApi.endpoints.getPost.initiate(postId)).unwrap();

    if (!post?.ok || !post?.body.data) notFound();

    return (
        <MainLayout title="Post">
            <PostItem post={post?.body.data} />
        </MainLayout>
    );
}
