function Coding() {
  const projects = [
    {
      title: "Daily Challenges",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
      image_folder: "daily-challenges",
    },
    {
      title: "Typespotting",
      description: "I like fonts.",
      link: "https://dailychallenges.jackkershaw.net",
      image_folder: "typespotting",
    },
    {
      title: "London Brutalist Map",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
      image_folder: "brutalist-map",
    },
    {
      title: "Other Project",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
      image_folder: "other",
    },
  ];

  return (
    <div className="space-between mx-5 mb-10 flex flex-col py-10">
      <section>
        <p className="max-w-max py-4 text-2xl sm:text-3xl">
          Projects I've built while learning to code. You can follow my progress{" "}
          <a
            href="https://progress.jackkershaw.net"
            target="_blank"
            className="shadow-md hover:underline lg:shadow-none"
          >
            here
          </a>{" "}
          and see some of my favorite learning resources{" "}
          <a
            href="https://github.com/jones58/Learning-Resources"
            target="_blank"
            className="shadow-md hover:underline lg:shadow-none"
          >
            here
          </a>
          .
        </p>
      </section>
      <section>
        <ol className="flex-space-between flex flex-col">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex-space-between flex flex-col lg:flex-row"
            >
              <img
                src={`/src/coding-page/${project.image_folder}/desktop.jpg`}
                alt={`desktop view of ${project.title}`}
                className="aspect-[1600/1093] h-auto max-w-full py-2"
                style={{ height: "auto" }}
              />
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-xl">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 text-right text-xl shadow-md hover:underline sm:mb-0 lg:shadow-none"
              >
                Click here to view full site
              </a>
              <img
                src={`/src/coding-page/${project.image_folder}/mobile.jpg`}
                alt={`mobile view of ${project.title}`}
                className="hidden aspect-[946/2048] h-auto max-w-full py-2 lg:block"
              />
              <div className="border-l-10 mx-auto border-dotted border-ykb-500"></div>
            </li>
          ))}
        </ol>
      </section>
      <section>
        <h3 className="text-2xl font-semibold">Where next?</h3>
      </section>
    </div>
  );
}

export default Coding;
