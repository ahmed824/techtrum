const BASE_URL = "https://www.fixerfm.com";

export async function GET() {
    const urls = [
        "",
        "/about",
        "/contact",
        "/book",
        "/service-1",
        "/service-2",
        "/service-3",
        "/service-4",
        "/service-5",
    ];

    const langs = ["en", "ar"];

    const entries = [];
    for (const lang of langs) {
        for (const path of urls) {
            const loc = `${BASE_URL}/${lang}${path}`;
            entries.push(`<url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`);
        }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}