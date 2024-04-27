const Page = () => {
    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h1 className="font-bold antialiased  text-[40px] md:text-[70px] lg:text-[80px]  text-center mt-20">
                새로운 것은 <br />
                섞을 때 나온다.
            </h1>
            <h2 className="font-light antialiased text-[18px] md:text-[20px] lg:text-[22px] text-gray-500 mt-6 md:mt-10 lg:mt-4">
                <span className="text-[24px] text-green-400">1000개</span>가 넘는 스크린을
                무제한으로 누리세요.
            </h2>
            <section className="flex md:flex-row flex-col max-w-[670px] w-full gap-10 px-6 md:px-0 mt-14">
                <div className="flex flex-col w-full h-[360px] border-solid border-gray-400 border rounded-lg shadow-lg bg-gray-700 text-white">
                    <div className="flex flex-col justify-between h-full pt-4 pl-4">
                        <div className="text-[20px]">12 MONTH</div>
                        <div className="text-[34px] lg:text-[40px] font-bold">
                            39,000 <span className="text-[30px] text-green-400">/ 1년</span>
                        </div>
                        <div>한 달 = 3,250원 </div>
                    </div>
                    <button className="m-4 p-2 py-4 border-solid border-gray-400 border rounded-lg">
                        결제하기
                    </button>
                </div>
                <div className="flex flex-col w-full h-[360px] border-solid border-gray-400 border rounded-lg shadow-lg">
                    <div className="flex flex-col justify-between h-full pt-4 pl-4">
                        <div className="text-[20px]">3 MONTH</div>
                        <div className="text-[34px] lg:text-[40px] font-bold">
                            12,000원 <span className="text-[30px] text-green-400">/ 분기</span>
                        </div>
                        <div>한 달 = 4,000원</div>
                    </div>
                    <button className=" m-4 p-2 py-4 border-solid border-gray-400 border rounded-lg">
                        결제하기
                    </button>
                </div>
            </section>
        </main>
    );
};

export default Page;
