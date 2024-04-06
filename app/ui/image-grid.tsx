import Link from 'next/link';
import { getPages } from '../lib/main/query';
import Image from 'next/image';

export default async function ImageGrid() {
    const pages = await getPages();
    return (
        <div className="grid-cols-3 grid gap-12 mt-48">
            {pages.map((page, index) => {
                return (
                    <div key={page.id} className="w-[380px] overflow-hidden  hover-scale">
                        <Link href={`/screen/${page.id}`}>
                            <figure className="text-center">
                                <Image
                                    src={page.thumbnail}
                                    alt={`screen ${index}`}
                                    width={385}
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
    );
}