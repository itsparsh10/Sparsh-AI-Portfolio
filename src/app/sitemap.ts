export default function sitemap() {
  const base = "https://example.com";
  return ["/", "/projects"].map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));
}

