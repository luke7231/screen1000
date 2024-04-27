import type { Metadata } from 'next';
import './ui/globals.css';
import './ui/reset.css';
import localFont from 'next/font/local';
import Link from 'next/link';
import Search from './ui/search';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: '화면 1000',
    description: '1000개의 스크린으로 영감을 얻으세요.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="py-4 bg-gray-100">
                    <div className="max-w-[1200px] mx-auto text-lg">
                        <h1>
                            <Link href={'/'} className="pl-6 ">
                                Screen Palette
                            </Link>
                        </h1>
                    </div>
                </header>
                {children}
            </body>
            {/* Pretendard test */}
            {/* <body className={pretendard.className}>{children}</body> */}
        </html>
    );
}
