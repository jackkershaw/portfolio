function Blogroll() {
  const blogs = [
    {
      title: "Robb Knight",
      description: "Interesting personal blog from Robb Knight.",
      link: "https://rknight.me/blog/",
      RSS_link: "https://rknight.me/subscribe/everything/rss.xml",
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
            <div className="rounded-lg border border-gray-300  mb-2 h-50 p-6">
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
