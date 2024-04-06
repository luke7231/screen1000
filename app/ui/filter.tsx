'use client';

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Tag } from '../lib/main/definition';

const tags: Tag[] = [
    {
        title: '사스',
        key: 'saas',
    },
    {
        title: '사스(해외)',
        key: 'saas-global',
    },
];

export default function Filter() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleClick(tag: Tag) {
        const params = new URLSearchParams(searchParams);
        const currentTag = params.get('t');

        if (tag) {
            if (tag.key === currentTag) {
                params.delete('t');
            } else {
                params.set('t', tag.key);
            }
        } else {
            params.delete('t');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div id="hashtag" className="pt-4">
            {tags.map((tag) => (
                <span key={tag.key} onClick={() => handleClick(tag)}>
                    #{tag.title}{' '}
                </span>
            ))}
        </div>
    );
}
