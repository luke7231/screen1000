import { getPage } from '@/app/lib/main/query';
import Button from '@/app/ui/button';
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
                <Button text="방문하기" href="./" />
            </section>
        </main>
    );
}
