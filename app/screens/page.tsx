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
            <Filter />
            <ImageGrid tagKey={tagKey} currentPage={currentPage} />

            <div className="flex w-full justify-center mt-12 mb-12">
                <Pagination totalPages={totalPages} />
            </div>
        </main>
    );
}
