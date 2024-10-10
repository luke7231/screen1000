import { sql } from '@vercel/postgres';
import { ImageAnnotatorClient } from '@google-cloud/vision';

const ITEMS_PER_PAGE = 12;
export async function getTextFromImage(link: string) {
    let data;
    async function exchangeCodeForToken() {
        const response = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                client_id:
                    '1065376047615-ca8n7aa2ncjdpp8lk1fh1hato0ensv99.apps.googleusercontent.com',
                client_secret: 'YOUR_CLIENT_SECRET', // Google Cloud 콘솔에서 생성된 클라이언트 시크릿
                redirect_uri: 'http://localhost:8080/authcode',
                grant_type: 'authorization_code',
                response_type: 'code', // 받은 authorization code
            }),
        });

        const data = await response.json();
        return data;
    }
    const client = new ImageAnnotatorClient({
        credentials: {
            type: 'service_account',
            project_id: 'qqrbbingbbong',
            private_key_id: '68b95d35f51b23fee5d3db82bac2bac08d99cadb',
            private_key:
                '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDwCBmmkizoUdDq\nouktPpzylC4f+qEVTjYZbOOeX1EDRvPqA8FVc9M4nMWbhjcNUpWo/ysQudXq/yfK\nfhf05EPKsRxxqKXdJ+mgoTnyVMEfcEfy6Ny+TZSKeuVJGH39o+8FxDZJgQoy4olZ\njkGujQFdR7iPLRPsSsPDktyD+Q8YDWtM7ifWooly+M76rsoJjRDg0OCgAO0m8HmJ\npzo6n9pBVTFM3CrhcQcb6r6vefVVcnM0i0dedi7CdEK67S1V1VUw7+EUQCJoe0QR\nFzmo3JZNsNrgC4tgki3jf+LxE9rL5N5Fdf5GdnbxfHwCVBlbFvmL7Bqw8bUKxOkT\n1gNJoRFnAgMBAAECggEAEguZ2hL9O04DVdB/lT4y0G3hddgCyjZCDPFJv3tM/OEV\nr08u9rypcYUfugyCEQdXZwgf9bby5SLfm/KU3H1Yt2FPUSArsA+zGbdlQtmqVzG6\nxwFIrynn8+0/VZp4xlvPuXBB4I7J9H9hchEm0Pea1adxsZni+I26X/ani2hrARTD\n6Aw3jr7RVYRfY+ML+RspiMegYkwvKa4M1NH6hleaYNxyoChG5K7BoyV9kMUt/zzk\nFoa1opnGS+CsBTPQESzlYtquCJxLWHHroAPlAxizJpsNrgpJEo/E/LfnPmVIqTLj\nXJ9RqdN9eGOIPADL2pi63WPoYHGVWylcKaZuxmSvyQKBgQD8cEZUI54JaxyJaarL\nM/zT/zxuhwHRjNAUuMPUmmPHpWVuILGemx/2lN6TWFZpoa7TpHHOk8/34np7oZNB\nviDAN6dl1PwtTEIhy5puHVmeLbGtD/uYBIUA0hZ5b9lU4pKp1vFGX5WbsR8ce9CX\nssHSWFFPpWrFzAb+oWRYEMsGswKBgQDzawQFoinarlncSO0kFKJWjT4iSw4ZlS3t\nroBl3nlzR6s0JqnlVXRuhpLBzIbMeQ6H2RyiB9XQU6MduHUHVs+fiMoSbnqRd5rC\nq8RXNct9lzstIeYeO73Oh6zbOgSWTiTrdI/tNC9MbGztqAaAY99xZGfVeG8zKxB2\nDywS/gwEfQKBgGkXCIAwj7MWDzw5bCvKCb/rqqnMtHobJ+jofkX8u/s6JL6zB56i\nr6zEjuBCTz8MWy6qb+Jy8Ioek6TyP86HqzS6NosTHqRw8bsF+tVKjKtoFGaal7/S\nadhMnaSSZqSK6kmgPLNySWMWWoBOHyl39m5t6/O/RnLvnB3W7GIpI4w3AoGBAMoQ\nZQdUJVBd+URu2URhSJ12pESNb4f3GWg7umRV+RWkQc+J5PD2Li/t0HfGE4Q7Xb+R\nkD5FKM3GEBsE20kbXED/qVcBlQeadMLzGYqXonOADeSaRk+EojyGzgwyLkqjVeyL\nF0r+TeEwBICIQdVkksCra7J+RjkAn6qRT7H4Z/t1AoGAGJam163DaLqIa6tKYtWB\n1dr2Pcfn/4PuKH5SanKIGvnStyTp9liFoYkwAWFCDZjPdUAO2lZKSiuQEKTSB04s\nLh9etlCvK3lrfVZ7nzi5mK7Wh7qbQNNnJol6fn3h0zHuvB/Ud5ndAxnts/qIQHUR\noKCo6iy9oi2nh3Q+84v0kOs=\n-----END PRIVATE KEY-----\n',
            client_email: 'aaaaaaaaa@qqrbbingbbong.iam.gserviceaccount.com',
            client_id: '117969153116131754220',
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
