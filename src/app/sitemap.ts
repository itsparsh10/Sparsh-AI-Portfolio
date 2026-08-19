export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return ["/", "/projects", "/ai-mode"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}

