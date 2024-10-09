import { getTextFromImage } from './lib/main/query';

export default async function Home({
    searchParams,
}: {
    searchParams?: {
        t?: string;
        page?: string;
        link?: string;
    };
}) {
    const imageLink = searchParams?.link || '';
    let detectedText: string | null | undefined = null;

    if (imageLink) {
        try {
            detectedText = await getTextFromImage(imageLink);
        } catch (error) {
            console.error('Error detecting text from image:', error);
            detectedText = 'Error detecting text.';
        }
    }

    return (
        <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center">
            <h2 className="font-light antialiased text-[16px] md:text-[18px] lg:text-[24px] text-gray-500 mt-4 md:mt-6 lg:mt-8">
                Look around the screen by color
            </h2>

            <form method="get" className="mt-6 w-full md:w-1/2">
                <input
                    type="text"
                    name="link"
                    defaultValue={imageLink}
                    placeholder="Enter image link"
                    className="border p-2 rounded-lg w-full"
                />
                <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Extract Text
                </button>
            </form>

            {detectedText && (
                <div className="mt-6 p-4 bg-gray-100 rounded-lg w-full md:w-1/2">
                    <h3 className="font-semibold">Detected Text:</h3>
                    <p>{detectedText}</p>
                </div>
            )}
        </main>
    );
}
