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
      title: "404 Media",
      description:
        "Offshoot of Vice's Motherboard website - well written tech news.",
      link: "https://www.404media.co/",
      RSS_link: "https://www.404media.co/rss/",
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
      title: "Maggie Appleton",
      description:
        "London-based developer tending to a digital garden filled with design, development, and anthropology.",
      link: "https://maggieappleton.com/",
      RSS_link: "https://maggieappleton.com/rss.xml",
    },
    {
      title: "Sonia Turcotte",
      description: "Freelance designer and researcher.",
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
        "London-based frontend developer - good place to hear about what's happening in London.",
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
      title: "Hacker News",
      description: "The best source of tech news.",
      link: "https://news.ycombinator.com/",
      RSS_link: "https://news.ycombinator.com/rss",
    },
    {
      title: "Manuel Moreale RSS Feed",
      description:
        "One of my favourite blogs - has a regular People and Blogs post interviewing people on their sites.",
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
      title: "Novara Media",
      description:
        "Left of The Guardian, good source of political news.",
      link: "https://novaramedia.com/",
      RSS_link: "https://novaramedia.com/feed/",
    },
    {
      title: "Tricontinental: Institute for Social Research",
      description: "International, movement-driven news.",
      link: "https://thetricontinental.org/",
      RSS_link: "https://thetricontinental.org/feed/",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl pt-4">Blogs</h1>
      <div className="flex flex-wrap py-4">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          >
            <div className="rounded-lg border border-neutral-300 mb-2 h-50 p-6">
              <h2 className="text-2xl  mb-2">{blog.title}</h2>
              <p className="text-neutral-900 mb-4 text-lg">
                {blog.description}
              </p>
              <div className="flex-row flex justify-start space-x-2">
                <button>
                  <a
                    target="_blank"
                    href={blog.link}
                    className="inline-block bg-ykb hover:bg-ykbdark text-neutral-100 py-2 px-2 rounded-sm"
                  >
                    Read
                  </a>
                </button>
                <button>
                  <a
                    target="_blank"
                    href={blog.RSS_link}
                    className="inline-block bg-ykb hover:bg-ykbdark text-neutral-100  py-2 px-2 rounded-sm"
                  >
                    RSS
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full px-4 mb-4 md:mb-0">
          <div className="rounded-lg border border-neutral-300  mb-2 h-50 p-6">
            <p className="text-neutral-900 mb-4 text-lg">
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
