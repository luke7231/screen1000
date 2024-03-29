import Image from 'next/image';
import Img1 from '../public/snowflake.jpg';
import Img2 from '../public/salesforce.jpg';
import Img3 from '../public/servicenow.jpg';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h1 className="font-bold antialiased  text-[140px] text-center mt-40">화면 1000</h1>
            <h2 className="font-light antialiased text-[24px] text-gray-500 mt-14">
                1000개의 스크린으로 영감을 얻으셔요~.
            </h2>

            <div id="hashtag" className="pt-4">
                <span>#랜딩페이지</span>
                <span>#Saas</span>
                <span>#Saas(해외)</span>
            </div>
            <div className="grid-cols-3 grid gap-12 mt-48">
                <div className="w-[380px] h-[475px] overflow-hidden rounded-md shadow-lg hover-scale">
                    <Link href={'./1'}>
                        <Image src={Img1} alt="screen 1" width={380} className="object-cover" />
                    </Link>
                </div>
                <div className="w-[380px] h-[475px] overflow-hidden rounded-md shadow-lg mt-12 hover-scale">
                    <Image src={Img2} alt="screen 1" width={380} className="object-cover" />
                </div>
                <div className="w-[380px] h-[475px] overflow-hidden rounded-md shadow-lg hover-scale">
                    <Image src={Img3} alt="screen 1" width={380} className="object-cover" />
                </div>
            </div>
        </main>
    );
}
