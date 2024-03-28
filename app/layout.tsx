import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

// const pretendard = localFont({
//   src: [
//     {
//       path: "./ui/fonts/Pretendard-Light.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "./ui/fonts/Pretendard-Regular.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "./ui/fonts/Pretendard-Bold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./ui/fonts/Pretendard-ExtraBold.woff2",
//       weight: "800",
//       style: "normal",
//     },
//   ],
// });

const sb = localFont({
    src: [
        {
            path: './ui/fonts/SB-light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './ui/fonts/SB-medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './ui/fonts/SB-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './ui/fonts/SB-light-window.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './ui/fonts/SB-medium-window.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './ui/fonts/SB-bold-window.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={sb.className}>{children}</body>
            {/* <body className={inter.className}>{children}</body> */}
        </html>
    );
}
