function Blogroll() {
  const blogs = [
    {
      title: "designswarm {thoughts}",
      description: "Blogging since 2005",
      link: "https://www.designswarm.com/blog",
      RSS_link: "https://www.designswarm.com/blog/feed/",
    },
    {
      title: "It's Nice That",
      description:
        "It’s Nice That believes passionately that creative inspiration is for everyone",
      link: "https://itsnicethat.com",
      RSS_link: "https://feeds2.feedburner.com/itsnicethat/SlXC",
    },
    {
      title: "ianVisits",
      description: "",
      link: "https://www.ianvisits.co.uk/articles",
      RSS_link: "https://www.ianvisits.co.uk/articles/feed/",
    },
    {
      title: "Londonist",
      description: "A website about London",
      link: "https://londonist.com/",
      RSS_link: "https://feeds.feedburner.com/londonist/sBMe",
    },
    {
      title: "Mapping London",
      description: "Highlighting the best London maps",
      link: "https://mappinglondon.co.uk/",
      RSS_link: "https://mappinglondon.co.uk/feed/",
    },
    {
      title: "The Beauty of Transport",
      description:
        "Transport design, transport architecture, and transport's influence on art and culture. Part travelogue, part history, all transport (but sometimes tangentially so)",
      link: "https://thebeautyoftransport.com/",
      RSS_link: "https://thebeautyoftransport.com/feed/",
    },
    {
      title: "The Picky Glutton",
      description:
        "London restaurant reviews to help you avoid needless gout & wasted money",
      link: "https://pickyglutton.com/",
      RSS_link: "https://pickyglutton.com/feed/",
    },
    {
      title: "404 Media",
      description:
        "404 Media is a new independent media company founded by technology journalists Jason Koebler, Emanuel Maiberg, Samantha Cole, and Joseph Cox.",
      link: "https://www.404media.co/",
      RSS_link: "https://www.404media.co/rss/",
    },
    {
      title: "Alun Kirby",
      description: "Cyanotype Origami Memory - Art",
      link: "http://alunkirby.com/",
      RSS_link: "http://alunkirby.com/feed/",
    },
    {
      title: "anhvn",
      description: "personal website",
      link: "https://anhvn.com/",
      RSS_link: "https://anhvn.com/feed.xml",
    },
    {
      title: "Articles on Jose M.",
      description: "Recent articles on Jose M.",
      link: "https://josem.co/articles/",
      RSS_link: "https://josem.co/articles/index.xml",
    },
    {
      title: "Björn Rust",
      description:
        "Björn Rust (he/him) is a post-industrial designer, researcher and educator, developing context-sensitive solutions in service of people and the planet.",
      link: "https://bjornrust.com/",
      RSS_link: "https://bjornrust.com/feed/feed.xml",
    },
    {
      title: "Chia's Blog",
      description: "",
      link: "https://chias.blog/",
      RSS_link: "https://chias.blog/feed/",
    },
    {
      title: "Chris Hannah",
      description: "My little piece of the internet",
      link: "https://chrishannah.me/",
      RSS_link: "https://chrishannah.me/index.xml",
    },
    {
      title: "Common Knowledge blog",
      description: "",
      link: "http://commonknowledge.coop/writing/",
      RSS_link: "https://commonknowledge.coop/rss-feed",
    },
    {
      title: "Dave Smyth",
      description: "",
      link: "https://davesmyth.com/",
      RSS_link: "https://davesmyth.com/feed",
    },
    {
      title: "David Jonathan Ross",
      description:
        "Typeface design and typography by David Jonathan Ross.",
      link: "https://djr.com/",
      RSS_link: "https://djr.com/feed.rss",
    },
    {
      title: "De Programmatica Ipsum",
      description: "Recent content on De Programmatica Ipsum",
      link: "https://deprogrammaticaipsum.com/",
      RSS_link: "https://deprogrammaticaipsum.com/index.xml",
    },
    {
      title: "Freelance From Jason",
      description: "Freelance? In this economy?",
      link: "https://fromjason.xyz/p/freelance/",
      RSS_link: "https://www.fromjason.xyz/p/freelance/feed/feed.xml",
    },
    {
      title: "harryfk on Pixelfed",
      description:
        "Capturing the mundane, with the best worst camera ever, the #GameBoyCamera, in crisp 128x112 pixels. One photo a day, since Dec 2022, taken with an actual GameBoy, no mods.",
      link: "https://pixelfed.social/harryfk",
      RSS_link: "https://pixelfed.social/users/harryfk.atom",
    },
    {
      title: "HeydonWorks",
      description: "Writing and creative coding from Heydon Pickering",
      link: "https://heydonworks.com/",
      RSS_link: "https://heydonworks.com/feed.xml",
    },
    {
      title: "Johannes Klingebiel",
      description: "",
      link: "https://johannesklingebiel.de/",
      RSS_link: "https://johannesklingebiel.de/feed.xml",
    },
    {
      title: "popagandhi",
      description:
        "long form essays, photos, recipes and other interests by adrianna tan",
      link: "https://popagandhi.com/",
      RSS_link: "https://popagandhi.com/feed.xml",
    },
    {
      title: "precastreinforced",
      description: "Ray Newman, writer",
      link: "https://precastreinforced.co.uk/",
      RSS_link: "https://precastreinforced.co.uk/feed/",
    },
    {
      title: "Ideas Latest",
      description: "Channel Description",
      link: "https://www.wired.com/",
      RSS_link: "https://www.wired.com/feed/category/ideas/latest/rss",
    },
    {
      title: "Inautilo · Hotspots for Online Professionals",
      description:
        "What your peers in the web industry talk about next.",
      link: "https://www.inautilo.com/",
      RSS_link: "https://feeds.feedburner.com/inautilo",
    },
    {
      title: "Iron_Geek",
      description: "Iron_Geek's Home",
      link: "https://irongeek.net/",
      RSS_link: "https://irongeek.net/buffnews.xml",
    },
    {
      title: "Kevin Lee Drum",
      description: "Kevin Lee Drum",
      link: "https://kld.dev/",
      RSS_link: "https://kld.dev/rss.xml",
    },
    {
      title: "lili's musings",
      description:
        "hi! this is lili, you found my little digital corner. I made this as I wanted a space to write freely, to refine how I think about the world. expect raw ...",
      link: "https://lili.bearblog.dev/",
      RSS_link: "https://lili.bearblog.dev/feed/?type=rss",
    },
    {
      title: "Maggie Appleton",
      description:
        "A digital garden filled with visual essays, research notes, and experiments at the intersection of design, development, and anthropology.",
      link: "https://maggieappleton.com/",
      RSS_link: "https://maggieappleton.com/rss.xml",
    },
    {
      title: "Matt Stein",
      description: "Curated collection of worthless blurbs.",
      link: "https://mattstein.com/",
      RSS_link: "https://mattstein.com/rss.xml",
    },
    {
      title: "Nicolas Hoizey - All contents",
      description: "",
      link: "https://nicolas-hoizey.com/archives/",
      RSS_link: "https://nicolas-hoizey.com/feeds/all.xml",
    },
    {
      title: "Normcore Tech",
      description:
        "Hi! This is the newsletter for posts that I post on [my website](https://vickiboykis.com/), things that used to go into my [NormCore Tech newsletter](https://vicki.substack.com/), updates on [my work on Viberary](https://viberary.pizza/), and general news/updates from me. I write about topics related to:  machine learning, recommender systems and information retrieval, tech and society. Welcome to The Stream!",
      link: "https://newsletter.vickiboykis.com/",
      RSS_link: "https://newsletter.vickiboykis.com/rss",
    },
    {
      title: "Notebook From Jason",
      description: "Very serious stuff. Typos included. :)",
      link: "https://fromjason.xyz/p/notebook/",
      RSS_link: "https://www.fromjason.xyz/p/notebook/feed/feed.xml",
    },
    {
      title: "Notes on Kwon.nyc",
      description: "Recent content in Notes on Kwon.nyc",
      link: "https://kwon.nyc/notes/",
      RSS_link: "https://kwon.nyc/notes/index.xml",
    },
    {
      title: "Paul Robert Lloyd",
      description: "",
      link: "https://paulrobertlloyd.com/",
      RSS_link: "https://paulrobertlloyd.com/feed.xml",
    },
    {
      title: "Sara Joy",
      description: "Sara's homepage, blog, portfolio",
      link: "https://sarajoy.dev/",
      RSS_link: "https://sarajoy.dev/rss.xml",
    },
    {
      title: "Silvia Maggi",
      description:
        "Welcome to my personal website. I write about design, technology, their effects on our lives, photography, and more. I curate the inspiration series Design, Digested.",
      link: "https://silviamaggidesign.com/",
      RSS_link: "https://silviamaggidesign.com/feed.xml",
    },
    {
      title: "Sonia Turcotte",
      description: "Freelance designer and researcher.",
      link: "https://soniaturcotte.com/",
      RSS_link: "https://soniaturcotte.com/feed/feed.xml",
    },
    {
      title: "Stories From Jason",
      description:
        "Flash fiction, short stories, & a secret third thing.",
      link: "https://fromjason.xyz/p/stories/",
      RSS_link: "https://www.fromjason.xyz/p/stories/feed/feed.xml",
    },
    {
      title: "Tegowerk",
      description: "Recent content on Tegowerk",
      link: "https://tegowerk.eu/",
      RSS_link: "https://tegowerk.eu/index.xml",
    },
    {
      title: "The Fence",
      description: "The Fence Magazine",
      link: "https://www.the-fence.com/",
      RSS_link: "https://www.the-fence.com/feed/",
    },
    {
      title: "The Jolly Teapot",
      description: "The feed of updates to The Jolly Teapot",
      link: "http://thejollyteapot.com/",
      RSS_link: "https://thejollyteapot.com/feed.rss",
    },
    {
      title: "Todepond dot com",
      description: "place for todes - ribbits aplenty",
      link: "http://www.todepond.com/",
      RSS_link: "https://www.todepond.com/feed/index.xml",
    },
    {
      title: "TypeOff.",
      description:
        "Dan Reynolds is a Wuppertal-based design researcher",
      link: "https://www.typeoff.de/",
      RSS_link: "https://www.typeoff.de/feed/",
    },
    {
      title: "Village One",
      description:
        "Village One is a worker-owned cooperative, creating purposeful digital products + infrastructure with joy and integrity",
      link: "https://www.village.one/",
      RSS_link: "https://www.village.one/feed.rss",
    },
    {
      title: "We Are Open Co-op",
      description:
        "Making sense of complex problems while spreading the benefits of open.",
      link: "https://weareopen.coop/",
      RSS_link: "https://weareopen.coop/feed/",
    },
    {
      title: "Working Class History",
      description:
        "History isn't made by kings and politicians, it is made by us.",
      link: "https://workingclasshistory.com/",
      RSS_link: "https://workingclasshistory.com/feed/",
    },
    {
      title: "Aegir.org",
      description:
        "This is Aegir's blog, posts about the things I make and how I made them, and photos of my garden or walks I've been on",
      link: "http://aegir.org/words",
      RSS_link: "https://aegir.org/words/feed/",
    },
    {
      title: "Ana Rodrigues",
      description: "A personal blog from Ana Rodrigues.",
      link: "https://ohhelloana.blog/",
      RSS_link: "https://ohhelloana.blog/feed.xml",
    },
    {
      title: "Backchannel Latest",
      description: "Channel Description",
      link: "https://www.wired.com/",
      RSS_link:
        "https://www.wired.com/feed/category/backchannel/latest/rss",
    },
    {
      title: "bloomberry",
      description: "insights to bloom your career potential and pay",
      link: "https://bloomberry.com/",
      RSS_link: "https://bloomberry.com/feed/",
    },
    {
      title: "Cory Dransfeldt",
      description: "Posts from my site.",
      link: "https://coryd.dev/",
      RSS_link: "https://feedpress.me/coryd",
    },
    {
      title: "Culture Latest",
      description: "Channel Description",
      link: "https://www.wired.com/",
      RSS_link:
        "https://www.wired.com/feed/category/culture/latest/rss",
    },
    {
      title: "Fabien Sanglard",
      description: "Chronicles of software wizardry",
      link: "https://fabiensanglard.net/",
      RSS_link: "https://fabiensanglard.net/rss.xml",
    },
    {
      title: "Gonçalo Valério",
      description: "Thoughts, projects and some other stuff",
      link: "https://blog.ovalerio.net/",
      RSS_link: "https://blog.ovalerio.net/feed",
    },
    {
      title: "Guide to AI",
      description:
        "The monthly newsletter analysing the most important AI technology, research, geopolitics and startups.",
      link: "https://nathanbenaich.substack.com/",
      RSS_link: "https://nathanbenaich.substack.com/feed",
    },
    {
      title: "Hacker News",
      description:
        "Links for the intellectually curious, ranked by readers.",
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
      title: "Julia Evans",
      description: "",
      link: "http://jvns.ca/",
      RSS_link: "https://jvns.ca/atom.xml",
    },
    {
      title: "Katy DeCorah",
      description:
        "Software engineer and tinkerer from Saratoga Springs, NY.",
      link: "https://katydecorah.com/",
      RSS_link: "https://katydecorah.com/feed.xml",
    },
    {
      title: "localghost",
      description:
        "Sophie builds fun things out of HTML, CSS & JavaScript, and writes blog posts about tech and mental health.",
      link: "https://localghost.dev/",
      RSS_link: "https://localghost.dev/feed.xml",
    },
    {
      title: "LOW←TECH MAGAZINE English",
      description:
        "This is a solar-powered website, which means it sometimes goes offline",
      link: "https://solar.lowtechmagazine.com/posts/",
      RSS_link: "https://solar.lowtechmagazine.com/posts/index.xml",
    },
    {
      title: "Manuel Moreale RSS Feed",
      description:
        "A collection of random thoughts about tech, life, design and pretty much everything else I find interesting.",
      link: "https://manuelmoreale.com/",
      RSS_link: "https://manuelmoreale.com/feed/rss",
    },
    {
      title: "Own Your Web",
      description:
        "Own Your Web is a newsletter by Matthias Ott about designing, building, creating, and publishing for and on the Web.",
      link: "https://buttondown.email/ownyourweb",
      RSS_link: "https://buttondown.email/ownyourweb/rss",
    },
    {
      title: "Phil Gyford’s website: Everything",
      description:
        "Things written, created, linked to or liked by Phil Gyford",
      link: "https://www.gyford.com/",
      RSS_link: "https://www.gyford.com/phil/feeds/everything/rss/",
    },
    {
      title: "Piper Haywood",
      description: "If lost, please return",
      link: "https://piperhaywood.com/",
      RSS_link: "https://piperhaywood.com/feed/",
    },
    {
      title: "Robb Knight • Posts • Atom Feed",
      description:
        "Maker of web things, Lego builder, sometimes blogger, sporadic pizzaiolo, fortnightly podcaster. Cat dad and human dad.",
      link: "https://rknight.me/",
      RSS_link: "https://rknight.me/subscribe/posts/atom.xml",
    },
    {
      title: "Robin Rendle",
      description: "Notes from the field.",
      link: "https://robinrendle.com/",
      RSS_link: "https://robinrendle.com/feed.xml",
    },
    {
      title: "Security Latest",
      description: "Channel Description",
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
      title: "Red Pepper",
      description: "",
      link: "https://www.redpepper.org.uk/",
      RSS_link: "https://www.redpepper.org.uk/feed/",
    },
    {
      title: "teleSUR English",
      description: "telesurenglish.net",
      link: "https://www.telesurenglish.net/",
      RSS_link: "https://www.telesurenglish.net/rss/RssHome.html",
    },
    {
      title: "Tribune",
      description: "",
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
              Subscribe to my blogs by importing{" "}
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
