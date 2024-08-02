function Blogroll() {
  const blogs = [
    {
      title: "It's Nice That",
      description:
        "A good source for news and events in the design industry.",
      link: "https://itsnicethat.com",
      RSS_link: "https://feeds2.feedburner.com/itsnicethat/SlXC",
    },
    {
      title: "ianVisits",
      description: "Travel blog for the UK.",
      link: "https://www.ianvisits.co.uk/articles",
      RSS_link: "https://www.ianvisits.co.uk/articles/feed/",
    },
    {
      title: "Londonist",
      description: "News and events in London.",
      link: "https://londonist.com/",
      RSS_link: "https://feeds.feedburner.com/londonist/sBMe",
    },
    {
      title: "Mapping London",
      description: "Highlights the best London maps",
      link: "https://mappinglondon.co.uk/",
      RSS_link: "https://mappinglondon.co.uk/feed/",
    },

    {
      title: "404 Media",
      description:
        "Offshoot of Vice's Motherboard website - well written tech news.",
      link: "https://www.404media.co/",
      RSS_link: "https://www.404media.co/rss/",
    },
    {
      title: "Alun Kirby",
      description: "Cyanotype Art",
      link: "http://alunkirby.com/",
      RSS_link: "http://alunkirby.com/feed/",
    },
    {
      title: "Common Knowledge blog",
      description:
        "Updates from the digital cooperative, Common Knowledge.",
      link: "http://commonknowledge.coop/writing/",
      RSS_link: "https://commonknowledge.coop/rss-feed",
    },
    {
      title: "David Jonathan Ross",
      description:
        "Typeface design and typography by David Jonathan Ross.",
      link: "https://djr.com/",
      RSS_link: "https://djr.com/feed.rss",
    },

    {
      title: "harryfk on Pixelfed",
      description: "One GameBoy photo a day.",
      link: "https://pixelfed.social/harryfk",
      RSS_link: "https://pixelfed.social/users/harryfk.atom",
    },
    {
      title: "Ideas Latest",
      description: "Ideas from Wired.",
      link: "https://www.wired.com/",
      RSS_link: "https://www.wired.com/feed/category/ideas/latest/rss",
    },
    {
      title: "Maggie Appleton",
      description:
        "London-based developer tending to a digital garden filled with design, development, and anthropology.",
      link: "https://maggieappleton.com/",
      RSS_link: "https://maggieappleton.com/rss.xml",
    },
    {
      title: "Sonia Turcotte",
      description:
        "Freelance designer and researcher, formerly of Common Knowledge.",
      link: "https://soniaturcotte.com/",
      RSS_link: "https://soniaturcotte.com/feed/feed.xml",
    },
    {
      title: "The Jolly Teapot",
      description: "Often shares interesting links.",
      link: "http://thejollyteapot.com/",
      RSS_link: "https://thejollyteapot.com/feed.rss",
    },
    {
      title: "Todepond dot com",
      description: "London-based developer.",
      link: "http://www.todepond.com/",
      RSS_link: "https://www.todepond.com/feed/index.xml",
    },
    {
      title: "Village One",
      description:
        "A cooperative, creating purposeful digital products + infrastructure",
      link: "https://www.village.one/",
      RSS_link: "https://www.village.one/feed.rss",
    },
    {
      title: "We Are Open Co-op",
      description: "Tech cooperative",
      link: "https://weareopen.coop/",
      RSS_link: "https://weareopen.coop/feed/",
    },
    {
      title: "Ana Rodrigues",
      description:
        "London-based frontend developer - good place to hear about what's happening in the London scene!",
      link: "https://ohhelloana.blog/",
      RSS_link: "https://ohhelloana.blog/feed.xml",
    },
    {
      title: "Backchannel Latest",
      description: "Long reads from Wired.",
      link: "https://www.wired.com/",
      RSS_link:
        "https://www.wired.com/feed/category/backchannel/latest/rss",
    },
    {
      title: "Cory Dransfeldt",
      description: "Interesting blog on the future of the web.",
      link: "https://coryd.dev/",
      RSS_link: "https://feedpress.me/coryd",
    },
    {
      title: "Culture Latest",
      description: "Culture Articles from Wired.",
      link: "https://www.wired.com/",
      RSS_link:
        "https://www.wired.com/feed/category/culture/latest/rss",
    },
    {
      title: "Guide to AI",
      description: "Monthly AI newsletter.",
      link: "https://nathanbenaich.substack.com/",
      RSS_link: "https://nathanbenaich.substack.com/feed",
    },
    {
      title: "Hacker News",
      description: "The best source of tech news.",
      link: "https://news.ycombinator.com/",
      RSS_link: "https://news.ycombinator.com/rss",
    },
    {
      title: "Jack Kershaw | Blog",
      description:
        "My personal blog - writing about the web, typography and design.",
      link: "https://jackkershaw.net/",
      RSS_link: "https://jackkershaw.net/rss.xml",
    },
    {
      title: "LOW←TECH MAGAZINE English",
      description: "A solar-powered website.",
      link: "https://solar.lowtechmagazine.com/posts/",
      RSS_link: "https://solar.lowtechmagazine.com/posts/index.xml",
    },
    {
      title: "Manuel Moreale RSS Feed",
      description:
        "One of my favourite bloggers - has a regular People and Blogs post with bloggers.",
      link: "https://manuelmoreale.com/",
      RSS_link: "https://manuelmoreale.com/feed/rss",
    },
    {
      title: "Phil Gyford’s website: Everything",
      description: "Long-running personal blog.",
      link: "https://www.gyford.com/",
      RSS_link: "https://www.gyford.com/phil/feeds/everything/rss/",
    },
    {
      title: "Robb Knight",
      description: "Well-maintained personal blog by Robb Knight.",
      link: "https://rknight.me/",
      RSS_link: "https://rknight.me/subscribe/posts/atom.xml",
    },
    {
      title: "Security Latest",
      description: "Security Articles from Wired",
      link: "https://www.wired.com/",
      RSS_link:
        "https://www.wired.com/feed/category/security/latest/rss",
    },
    {
      title: "Monthly Review",
      description: "An Independent Socialist Magazine",
      link: "https://monthlyreview.org/",
      RSS_link: "https://monthlyreview.org/feed/",
    },
    {
      title: "Novara Media",
      description: "New Media for a Different Politics",
      link: "https://novaramedia.com/",
      RSS_link: "https://novaramedia.com/feed/",
    },
    {
      title: "Tribune",
      description: "Social and labour news from the UK",
      link: "https://tribunemag.co.uk/",
      RSS_link: "https://tribunemag.co.uk/feed/",
    },
    {
      title: "Tricontinental: Institute for Social Research",
      description:
        "international, movement-driven institution focused on stimulating intellectual debate that serves people’s aspirations.",
      link: "https://thetricontinental.org/",
      RSS_link: "https://thetricontinental.org/feed/",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl  pt-4">Blogs</h1>
      <div className="flex flex-wrap py-4">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          >
            <div className="rounded-lg border border-gray-300 mb-2 h-50 p-6">
              <h2 className="text-2xl  mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4 text-lg">
                {blog.description}
              </p>
              <div className="flex-row flex justify-start space-x-2">
                <button>
                  <a
                    target="_blank"
                    href={blog.link}
                    className="inline-block bg-ykb hover:bg-ykbdark text-white  py-2 px-2 rounded"
                  >
                    Read
                  </a>
                </button>
                <button>
                  <a
                    target="_blank"
                    href={blog.RSS_link}
                    className="inline-block bg-ykb hover:bg-ykbdark text-white  py-2 px-2 rounded"
                  >
                    RSS
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full px-4 mb-4 md:mb-0">
          <div className="rounded-lg border border-gray-300  mb-2 h-50 p-6">
            <p className="text-gray-700 mb-4 text-lg">
              Subscribe to all of the blogs I read (including some not
              mentioned above) by importing{" "}
              <a
                href="/blogs_opml.xml"
                target="_blank"
                className="hover:text-ykb"
              >
                this OPML file
              </a>{" "}
              into your RSS app.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogroll;
