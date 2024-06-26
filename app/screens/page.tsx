import { getNumberOfPage } from '../lib/main/query';
import Filter from '../ui/filter';
import ImageGrid from '../ui/image-grid';
import Pagination from '../ui/pagination';

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
            <div className="py-5 md:py-8 sticky top-0 bg-[#fafafa] w-full flex justify-center z-10">
                <Filter />
            </div>
            <div className="mt-4 md:mt-8">
                <ImageGrid tagKey={tagKey} currentPage={currentPage} />
            </div>

            <div className="flex w-full justify-center mt-12 mb-12">
                <Pagination totalPages={totalPages} />
            </div>
        </main>
    );
}
