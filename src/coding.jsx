function Coding() {
  const projects = [
    {
      title: "Daily Challenges",
      description:
        "My partner and I like to play Wordle-adjacent games so I made this website.",
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
      link: "https://brutalistmap.jackkershaw.net/",
      github_link: "https://github.com/jones58/London-Brutalist-Map",
      image_folder: "brutalist-map",
    },
    {
      title: "My Portfolio",
      description: "This website. ",
      link: "https://www.jackkershaw.net",
      github_link: "https://github.com/jones58/portfolio-2024",
      image_folder: "portfolio",
    },
  ];

  return (
    <div className="space-between mx-5 mb-10 flex flex-col py-10">
      <section>
        <p className="py-4 text-2xl lg:mx-5 lg:w-1/3">
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
            className="shadow-md hover:underline lg:shadow-none"
          >
            here
          </a>
          .
        </p>
      </section>
      <section>
        <ol className="flex-space-between flex flex-col justify-center">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex flex-col lg:m-5 lg:grid lg:grid-cols-4 lg:border-2 lg:border-black lg:pt-6"
            >
              <a
                href={project.link}
                target="_blank"
                className="lg:col-span-2 lg:h-[30vw] lg:px-10 lg:py-8"
              >
                <img
                  src={`public/coding-page/${project.image_folder}/desktop.jpg`}
                  alt={`desktop view of ${project.title}`}
                  className="my-2 h-auto w-full border-2 border-black object-contain lg:border-0"
                />
              </a>
              <div className="lg:col-span-1 lg:my-8  lg:p-8">
                <h3 className="text-2xl font-semibold lg:h-[8vw] lg:pb-5 lg:text-4xl">
                  {project.title}
                </h3>
                <p className="text-xl lg:h-[10vw] lg:text-2xl">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="mt-4 block w-full px-4 py-2 text-center text-xl shadow-md hover:underline lg:mt-0 lg:px-0 lg:py-2 lg:text-left lg:shadow-none
                  "
                >
                  View Website
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  className="mt-5 block w-full px-4 py-2 text-center text-xl shadow-md hover:underline lg:mt-0 lg:px-0 lg:py-2 lg:text-left lg:shadow-none"
                >
                  View Github
                </a>
              </div>
              <a
                href={project.link}
                target="_blank"
                className="lg:col-span-1 lg:h-[30vw]"
              >
                <img
                  src={`public/coding-page/${project.image_folder}/mobile.jpg`}
                  alt={`mobile view of ${project.title}`}
                  className="my-2 hidden h-auto max-h-[30vw] w-full object-contain lg:block "
                />
              </a>
              <div class="mx-auto my-4 h-10 border-8 border-dashed border-black lg:hidden"></div>
            </li>
          ))}
        </ol>
      </section>
      <section className="lg:m-5 lg:grid lg:grid-cols-4 lg:border-2 lg:border-black">
        <a
          href="https://github.com/jones58"
          target="_blank"
          className="shadow-lg hover:underline lg:col-span-2 lg:col-start-3 lg:shadow-none"
        >
          <h3 className="mb-5 max-w-full p-5 text-center text-2xl font-semibold lg:pt-8 lg:text-left lg:text-5xl">
            Where next?
          </h3>
        </a>
      </section>
    </div>
  );
}

export default Coding;
