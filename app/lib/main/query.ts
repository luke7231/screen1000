import { sql } from '@vercel/postgres';
import { ImageAnnotatorClient } from '@google-cloud/vision';

const ITEMS_PER_PAGE = 12;
export async function getTextFromImage(link: string) {
    let data;
    const client = new ImageAnnotatorClient({
        credentials: {
            client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
            projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
            private_key:
                '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCgWdClB/H/qmOp\nL1DHemgbQokZnzoNSTa+31GFXyjpuAuVYlyhsRo34EaeIOAInUQTc9rYirn8l2L9\nbkUcFrtvHq6fCnalk75als1ySJfVDWUIQSwfyXAORL3p0n/U4VO8oLwiX8dsgTmM\nTpk/mykMlHuDSUOOnkWrRAZ0mSarjWSCBpteRr36jZgyxpgEqGXMFci+X5YXZxd4\neqmFS5xWVNJWhU5JbSIhFR/pheEyM46UgreKdCfVNIGPtuvyO9nDJ9mZEVntzLzh\nuOziIYpfkGruVRW8nYDxarPSxvCCK17UPZh3KkwG06wtjMR0sx30ldjtQFQy+auW\nY0eLkxtVAgMBAAECggEAQHa7HY2LKXhrpnmCJR+9uK/QBD/yC6NSYfvPfynZfdRi\nu8SWbt6PJsWAPlQDHRN0acmawpFK4hROVIo/OGKfKbYRB5kiR8CUt0CHCZnLiHhh\nFKd2wLSv2tyh6N2aTI/lpSCNYdhViPaOlyyGCX8sSoVq/kW25iAU7Bxl5/wmArMq\n4xlRzPWrg/9GbSFZeVzemU5Gw1sI8sXgZFhG8IeLNyEwkjrz33xVYh7LwriJOVJU\nefY5KCuJuKqfXDIBDuwQyaYofjIv0DKuZDSKFeE3kNieHxzbgvAZZroXWCwK7Hjx\nBL2ygUIEwaal8VjdIyZIP4oE44K7siHQCVRvPazhJQKBgQC9zcezvdvLq517LLCo\ngkeEBmg4OZzFHQ4ZGdKJhaxJo70XzKv5HKRYXUv81CqbLhOz3g9vjgUojWkTzp0B\nkItn7KGECEWDCFJVE7uvGfunXouaQRIEIQuptojwvtCTAvTxkxm2+iZAlJ+/5fgH\nsSWZ33A3SLERWKIybWk2WbXS7wKBgQDYRmOkzcARZQQMJut6eiUvLANcP14uCNOu\nlerk07p0NAWdfel7AbMQOWlfY3lgLJuMC5bIt0FXLHf0R9sCNQV59DqBZyUTUcXv\nhoZ0X+gdYUS4gTyhYmbXj+L02lmAYj/E7ebg3e68gMERhd2RPl/sINzK5NF/ETSo\nUoyOkztl+wKBgHGyRQBcqL9WbB2O5bvrXp+tntyfVlOVVg6fM0kB8/SgyvLovdOZ\n3rC4In6vMV6HuXGzgZeXgWuLWfhtegun5Ho6e3413j3hzD/+dB0t+VuG/SVH+VzT\n1sKw/1MHWrXVvZjAP1Umf6eL4C35uhwRd6628+eJ+dekOnTuqWnPT2WtAoGAYbN6\ntCqWh8UgjPTQD+Y6AhNZ+URPIXCvYAEtue3EH1aY6srEvOLJp5yn84WWgVHleuCJ\nX2cZx225SstjLp4ROUSRYX/dCds5Fbmp58yjqRIV31vSrf0sBFll58L0B8FamXX3\nhMH9ZX6suWPF8iVBZAR8edPgqAx3w0p3YLk2bh0CgYBzGp06cnzKB6LqZGT5uCFM\nPKgePbsQdKxS/RqiKWxACwBydkb0EYIBGUrCY/pmcf5lJwP0ROcuO8p6XW2BrDWR\nVZWxLhPDtJIqehVJzkZIwLAaJY1UJEyyKC9nnLk1IpUSFIuX3YWbcoBK2UE3dmC7\nRnz4MYb0nuCCi+j/Gt9VgQ==\n-----END PRIVATE KEY-----\n',
        },
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
