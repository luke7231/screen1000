import { sql } from '@vercel/postgres';

export async function getPages() {
    const data = await sql`SELECT * FROM PAGE `;

    return data.rows;
}
export async function getPage(id: string) {
    const data = await sql`SELECT * FROM PAGE WHERE id = ${id}`;

    return data.rows;
}
