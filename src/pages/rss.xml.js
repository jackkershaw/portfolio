import rss, { pagesGlobToRssItems } from "@astrojs/rss";
export async function GET(context) {
  return rss({
    title: "Jack Kershaw | Blog",
    description:
      "My personal blog - writing about the web, typography and design.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-gb</language>`,
    stylesheet: "/rss/pretty-feed-v3.xsl",
  });
}
