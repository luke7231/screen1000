import Image from 'next/image';
import Link from 'next/link';
import { getPages } from './lib/main/query';
import Filter from './ui/filter';
import ImageGrid from './ui/image-grid';

export default async function Home({
    searchParams,
}: {
    searchParams?: {
        t?: string;
    };
}) {
    const tagKey = searchParams?.t || '';
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h1 className="font-bold antialiased  text-[140px] text-center mt-40">화면 1000</h1>
            <h2 className="font-light antialiased text-[24px] text-gray-500 mt-14">
                1000개의 스크린으로 영감을 얻으셔요~.
            </h2>

            <Filter />
            <ImageGrid tagKey={tagKey} />
        </main>
    );
}
