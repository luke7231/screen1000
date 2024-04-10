'use client';
import { useSearchParams } from 'next/navigation';
import Button from './button';
import { useEffect, useState } from 'react';

const GoToScreensButton = ({ tagKey, totalPages }: { tagKey: string; totalPages: number }) => {
    const path = './screens';
    const [href, setHref] = useState('./screens');
    const searchParams = useSearchParams();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        if (tagKey !== '') {
            params.set('t', tagKey);
        }
        if (totalPages > 1) {
            params.set('page', '2');
        }
        setHref(`${path}?${params.toString()}`);
    }, [tagKey, totalPages]);

    return <Button text="더보기" href={href} />;
};

export default GoToScreensButton;
