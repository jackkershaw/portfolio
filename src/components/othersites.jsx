function OtherSites() {
  const sites = [
    {
      title: "Are.na",
      description:
        "I use Are.na to collect websites and interesting tools for inspiration. ",
      link: "https://www.are.na/jack-kershaw/channels",
    },
    {
      title: "Fonts In Use",
      description:
        "The best place to find fonts and pairing suggestions.",
      link: "https://www.fontsinuse.com",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl pt-4">Other Sites I Like</h1>
      <div className="flex flex-wrap py-4">
        {sites.map((podcast) => (
          <div
            key={podcast.title}
            className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          >
            <div className="rounded-lg border border-neutral-300 mb-2 h-50">
              <div className="p-6">
                <h2 className="text-2xl mb-2">{podcast.title}</h2>
                <p className="text-neutral-900 mb-4 text-lg">
                  {podcast.description}
                </p>
                <div className="flex-row flex justify-start space-x-2">
                  <button>
                    <a
                      target="_blank"
                      href={podcast.link}
                      className="inline-block bg-ykb hover:bg-ykbdark text-neutral-100 py-2 px-2 rounded"
                    >
                      Visit
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherSites;
