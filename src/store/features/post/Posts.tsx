'use client';

import { Virtuoso } from 'react-virtuoso';

import { useLazyGetPostsQuery } from '@/store/services/post';

import { useInfinite } from '@/lib/hooks/useInfinite';

import { showPost } from './PostItem';

import type { IPostsProps } from './types';
import type { IPost } from '@/shared/types';

export const Posts = ({ initialData: { initialPost, initialHasNextPage } }: IPostsProps) => {
    const [getPosts] = useLazyGetPostsQuery();

    const { data: posts, loadData } = useInfinite<IPost>({
        initialData: initialPost,
        initialHasNextPage,
        initialPage: 2,
        getData: (page) => getPosts({ page }).unwrap(),
    });

    return (
        <Virtuoso
            data={posts}
            endReached={loadData}
            useWindowScroll
            itemContent={showPost}
            computeItemKey={(index, post) => post.id}
            initialTopMostItemIndex={0}
        />
    );
};
