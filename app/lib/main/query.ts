import { sql } from '@vercel/postgres';

export async function getPages(tag: string) {
    let data;
    if (tag) {
        data = await sql`SELECT * FROM PAGE WHERE tag = ${tag}`;
    } else {
        data = await sql`SELECT * FROM PAGE`;
    }

    return data.rows;
}
export async function getPage(id: string) {
    const data = await sql`SELECT * FROM PAGE WHERE id = ${id}`;

    return data.rows;
}
