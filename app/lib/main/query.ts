import { sql } from '@vercel/postgres';

const ITEMS_PER_PAGE = 12;
export async function getPages(tag: string, currentPage: number) {
    let data;
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    if (tag) {
        data =
            await sql`SELECT * FROM PAGE WHERE tag = ${tag} LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    } else {
        data =
            await sql`SELECT * FROM PAGE WHERE tag = 'saas' LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}`;
    }

    return data.rows;
}
export async function getPage(id: string) {
    const data = await sql`SELECT * FROM PAGE WHERE id = ${id}`;

    return data.rows;
}

export async function getNumberOfPage(tag: string) {
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
