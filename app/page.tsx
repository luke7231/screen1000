import Image from 'next/image';
import Link from 'next/link';
import { getPages } from './lib/main/query';

export default async function Home() {
    const pages = await getPages();
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h1 className="font-bold antialiased  text-[140px] text-center mt-40">화면 1000</h1>
            <h2 className="font-light antialiased text-[24px] text-gray-500 mt-14">
                1000개의 스크린으로 영감을 얻으셔요~.
            </h2>

            <div id="hashtag" className="pt-4">
                <span>#랜딩페이지</span>
                <span>#Saas</span>
                <span>#Saas(해외)</span>
            </div>
            <div className="grid-cols-3 grid gap-12 mt-48">
                {pages.map((page, index) => {
                    return (
                        <div key={page.id} className="w-[380px] overflow-hidden  hover-scale">
                            <Link href={`/screen/${page.id}`}>
                                <figure className="text-center">
                                    <Image
                                        src={page.thumbnail}
                                        alt={`screen ${index}`}
                                        width={380}
                                        height={475}
                                        className="object-cover rounded-md shadow-lg"
                                    />
                                    <figcaption className="mt-4">{page.name}</figcaption>
                                </figure>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}
