import { getPage } from '@/app/lib/main/query';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
    params: {
        id: string;
    };
}
export default async function Screen({ params: { id } }: Props) {
    const data = await getPage(id);
    const page = data[0];

    return (
        <main className="grow">
            <section className="max-w-[1200px] mx-auto flex flex-col md:flex-row mt-8">
                <div className="mb-12 w-full h-full mx-auto pl-6 pr-6 md:pr-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={page.image} className="w-full shadow-md" alt="screen" />
                </div>
                <div className="order-1 shrink-0 md:basis-[340px] md:w-[340px] md:ml-[30px]">
                    <div className="sticky top-6 pl-6 pr-6 md:pl-0">
                        <Link href={'./'} className="font-light">
                            <div className="py-3 mb-4 w-full flex justify-center items-center bg-gray-800 text-white rounded-lg">
                                방문하기
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
