import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Threads',
    description: 'Threads home page.',
};

export default function RootPage() {
    return (
        <main>
            <h1>Threads</h1>
        </main>
    );
}
