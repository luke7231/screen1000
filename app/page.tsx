import { getNumberOfPage } from './lib/main/query';
import Button from './ui/button';
import Filter from './ui/filter';
import GoToScreensButton from './ui/go-to-screens-button';
import ImageGrid from './ui/image-grid';
import Pagination from './ui/pagination';

export default async function Home({
    searchParams,
}: {
    searchParams?: {
        t?: string;
        page?: string;
    };
}) {
    const tagKey = searchParams?.t || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await getNumberOfPage(tagKey);
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h1 className="font-bold antialiased  text-[60px] md:text-[90px] lg:text-[120px]  text-center mt-40">
                화면 1000
            </h1>
            <h2 className="font-light antialiased text-[16px] md:text-[18px] lg:text-[24px] text-gray-500 mt-8 md:mt-12 lg:mt-14">
                1000개의 스크린으로 영감을 얻으세요
            </h2>
            <div className="pt-5">
                <Filter />
            </div>
            <div className="mt-24 md:mt-36 lg:mt-48">
                <ImageGrid tagKey={tagKey} currentPage={currentPage} />
            </div>
            <div className="flex w-full justify-center mt-12 mb-12">
                <GoToScreensButton tagKey={tagKey} totalPages={totalPages} />
            </div>
        </main>
    );
}
