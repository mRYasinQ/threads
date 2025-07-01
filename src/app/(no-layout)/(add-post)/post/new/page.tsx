import { NewPostForm } from '@/components/Forms/NewPostForm';

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'New Post • Threads',
    description: 'Threads new post page.',
};

export default function NewPostage() {
    return <NewPostForm />;
}
