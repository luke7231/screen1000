import Filter from './ui/filter';
import ImageGrid from './ui/image-grid';
import Pagination from './ui/pagination';

export default async function Home({
    searchParams,
}: {
    searchParams?: {
        t?: string;
    };
}) {
    const tagKey = searchParams?.t || '';
    const totalPages = 7;
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h1 className="font-bold antialiased  text-[60px] md:text-[90px] lg:text-[120px]  text-center mt-40">
                화면 1000
            </h1>
            <h2 className="font-light antialiased text-[16px] md:text-[18px] lg:text-[24px] text-gray-500 mt-8 md:mt-12 lg:mt-14">
                1000개의 스크린으로 영감을 얻으셔요~.
            </h2>

            <Filter />
            <ImageGrid tagKey={tagKey} />

            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </main>
    );
}
