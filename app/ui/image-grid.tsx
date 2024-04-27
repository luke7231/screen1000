import Link from 'next/link';
import { getPage, getPageBySearch, getPages } from '../lib/main/query';
import Image from 'next/image';

export default async function ImageGrid({
    query,
    tagKey = '',
    currentPage = 0,
}: {
    query?: string;
    tagKey?: string;
    currentPage?: number;
}) {
    const pages = query ? await getPageBySearch(query) : await getPages(tagKey, currentPage);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12">
            {pages.map((page, index) => {
                return (
                    <div
                        key={page.id}
                        className=" pl-[15px] pr-[15px] overflow-hidden  hover-scale">
                        <Link href={`/screen/${page.id}`}>
                            <figure className="text-center">
                                <Image
                                    src={page.thumbnail}
                                    alt={`screen ${index}`}
                                    width={385}
                                    height={475}
                                    className="object-cover rounded-md shadow-lg"
                                />
                                <figcaption className="mt-4 font-light">{page.name}</figcaption>
                            </figure>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
