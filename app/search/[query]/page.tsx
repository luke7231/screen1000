import { getNumberOfPage } from '../../lib/main/query';
import Filter from '../../ui/filter';
import ImageGrid from '../../ui/image-grid';
import Pagination from '../../ui/pagination';

interface Props {
    params: {
        query: string;
    };
}

export default async function Home({ params: { query } }: Props) {
    const totalPages = await getNumberOfPage();
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <div className="mt-4 md:mt-8">
                <ImageGrid query={query} />
            </div>

            <div className="flex w-full justify-center mt-12 mb-12">
                <Pagination totalPages={totalPages} />
            </div>
        </main>
    );
}
