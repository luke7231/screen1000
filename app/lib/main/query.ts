import { sql } from '@vercel/postgres';

export async function getPages() {
    const data = await sql`SELECT * FROM PAGE `;

    return data.rows;
}
