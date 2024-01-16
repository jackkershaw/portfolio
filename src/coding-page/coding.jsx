function Coding() {
  const projects = [
    {
      title: "Daily Challenges",
      description:
        "My partner and I both like to play Wordle and Wordle-adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
      github_link: "https://github.com/jones58/daily-challenges",
      image_folder: "daily-challenges",
    },
    {
      title: "Typespotting",
      description: "I like fonts.",
      link: "https://typespotting.jackkershaw.net/",
      github_link: "https://github.com/jones58/typespotting",
      image_folder: "typespotting",
    },
    {
      title: "All About Cooper Black",
      description: "I like fonts.",
      link: "https://allaboutcooperblack.jackkershaw.net/",
      github_link: "https://github.com/jones58/Cooper-Black-Info-Site",
      image_folder: "cooper-black",
    },
    {
      title: "London Brutalist Map",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
      github_link: "https://github.com/jones58/London-Brutalist-Map",
      image_folder: "brutalist-map",
    },
    {
      title: "My Portfolio",
      description: "This website. ",
      link: "https://www.jackkershaw.net",
      github_link: "https://github.com/jones58/portfolio-2024",
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
            className="shadow-md hover:underline lg:shadow-none "
          >
            here
          </a>{" "}
          and see some of my favorite learning resources{" "}
          <a
            href="https://github.com/jones58/Learning-Resources"
            target="_blank"
            className="shadow-md hover:underline lg:shadow-none "
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
              <a href={project.link} target="_blank">
                <img
                  src={`/src/coding-page/${project.image_folder}/desktop.jpg`}
                  alt={`desktop view of ${project.title}`}
                  className="my-2 aspect-[1600/1093] h-auto w-full border-2 border-black object-contain "
                />
              </a>
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-xl">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 block w-full px-4 py-2 text-center text-xl shadow-md hover:underline lg:shadow-none"
                >
                  View Website
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  className="mt-5 block w-full px-4 py-2 text-center text-xl shadow-md hover:underline lg:shadow-none"
                >
                  View Github
                </a>
              </div>
              <a href={project.link} target="_blank">
                <img
                  src={`/src/coding-page/${project.image_folder}/mobile.jpg`}
                  alt={`mobile view of ${project.title}`}
                  className="hidden aspect-[946/2048] py-2 lg:block"
                />
              </a>
              <div class="mx-auto my-4 h-10 border-8 border-dashed border-black"></div>
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
