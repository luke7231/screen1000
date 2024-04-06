'use client';

const tags = [
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
    return (
        <div id="hashtag" className="pt-4">
            {tags.map((tag) => (
                <span key={tag.key}>#{tag.title} </span>
            ))}
        </div>
    );
}
