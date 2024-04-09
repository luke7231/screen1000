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
            // TODO: 필터(태그)를 바꾸어도 히스토리가 유지되도록 변경해야함.
            params.delete('page');
        } else {
            params.delete('t');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div id="hashtag" className="flex pt-5 gap-3">
            {tags.map((tag) => (
                <span
                    key={tag.key}
                    onClick={() => handleClick(tag)}
                    className="border border-solid border-gray-200 p-2 rounded-xl shadow-sm text-green-400">
                    #{tag.title}{' '}
                </span>
            ))}
        </div>
    );
}
