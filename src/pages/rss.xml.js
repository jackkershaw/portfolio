import rss, { pagesGlobToRssItems } from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Jack Kershaw's Blog",
    description:
      "My personal blog - writing about the web, typography and design.",
    site: context.site,
    items: blog.map((post) => ({
      link: post.url,
      content: sanitizeHtml(post.compiledContent()),
      ...post.frontmatter,
    })),
    stylesheet: "/rss/pretty-feed-v3.xsl",
  });
}
