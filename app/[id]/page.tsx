import Image from 'next/image';
import Img1 from '../../public/snowflake.jpg';
import Link from 'next/link';

export default function Screen() {
    return (
        <main>
            <section className="max-w-[1200px] mx-auto flex min-h-screen mt-8">
                <div className="mb-12">
                    <Image alt="landing page" src={Img1} width={830}></Image>
                </div>
                <div className="order-1 shrink-0 md:basis-[340px] md:w-[340px] md:ml-[30px]">
                    <div className="sticky top-6">
                        <Link href={'./'} className="font-light">
                            <div className="px-6 py-3 mb-4 w-full flex justify-center items-center bg-gray-800 text-white rounded-lg">
                                방문하기
                            </div>
                        </Link>
                        <div>asd</div>
                    </div>
                </div>
            </section>
        </main>
    );
}
