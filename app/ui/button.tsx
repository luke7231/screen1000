import Link from 'next/link';

const Button = ({ text, href }: { text: string; href: string }) => {
    return (
        <div className="order-1 shrink-0 basis-[340px] md:w-[340px] md:ml-[30px]">
            <div className="sticky top-6 pl-6 pr-6 md:pl-0">
                <Link href={href} className="font-light">
                    <div className="py-3 mb-4 w-full flex justify-center items-center bg-gray-800 text-white rounded-lg">
                        {text}
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Button;
