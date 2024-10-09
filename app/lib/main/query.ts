import { sql } from '@vercel/postgres';
import { ImageAnnotatorClient } from '@google-cloud/vision';

const ITEMS_PER_PAGE = 12;
export async function getTextFromImage(link: string) {
    let data;
    const client = new ImageAnnotatorClient({
        keyFilename: 'qqrbbingbbong-49eb85901287.json',
    });
    async function detectText() {
        const [result] = await client.textDetection(link);
        const annotations = result.textAnnotations;
        return annotations?.[0]?.description;
    }

    return await detectText();
}
export async function getPage(id: string) {
    const data = await sql`SELECT * FROM PAGE WHERE id = ${id}`;

    return data.rows;
}

export async function getNumberOfPage(tag?: string) {
    try {
        const count = tag
            ? await sql`SELECT COUNT(*)
        FROM page
        WHERE
          tag = ${tag}
      `
            : await sql`SELECT COUNT(*) FROM page`;

        const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch total number of invoices.');
    }
}

export async function getSameDomainPages(id: string) {
    const currentPage = await sql`select * from page WHERE id = ${id}`;
    // ✅ TODO: 타이핑 할 것
    const currentPageName = currentPage.rows[0].name;

    const data = await sql`
        SELECT * 
        FROM PAGE 
        WHERE name = ${currentPageName} 
        AND id != ${id};
    `;

    return data.rows;
}
export async function getPageBySearch(query: string) {
    const decodedQuery = decodeURIComponent(query);
    const pages = await sql`
        SELECT *
        FROM page
        WHERE page.name::text ILIKE ${`%${decodedQuery}%`};
    `;
    return pages.rows;
}
