import MyTechStack from "./my-tech-stack";

function CodingContent() {
  const projects = [
    {
      title: "Right to the City",
      description:
        "Festival website for the Right to the City. Built using React.",
      link: "https://right-to-city.netlify.app/",
      github_link: "https://github.com/jones58/right-to-city",
      image_folder: "righttothecity",
    },
    {
      title: "Vital Signs",
      description:
        "Magazine for NHS workers in Bristol. Built using NextJS and headless Wordpress.",
      link: "https://www.vitalsignsmag.org/",
      github_link: "https://github.com/jones58/vital-signs",
      image_folder: "vitalsigns",
    },
    {
      title: "London Brutalist Map",
      description:
        "Discover London's brutalist buildings on an interactive map. Built using Mapbox API, React, TypeScript and Tailwind CSS.",
      link: "https://brutalistmap.jackkershaw.net/",
      github_link: "https://github.com/jones58/brutalist-map-2",
      image_folder: "brutalist-map",
    },

    {
      title: "Daily Challenges",
      description:
        "Explore a collection of Wordle-adjacent games. Built using HTML, CSS, and JavaScript.",
      link: "https://dailychallenges.jackkershaw.net",
      github_link: "https://github.com/jones58/daily-challenges",
      image_folder: "daily-challenges",
    },
    {
      title: "Typespotting",
      description:
        "Find the Cooper Black font in this Where's Wally-style game. Built using HTML, CSS, and JavaScript.",
      link: "https://typespotting.jackkershaw.net/",
      github_link: "https://github.com/jones58/typespotting",
      image_folder: "typespotting",
    },
    {
      title: "All About Cooper Black",
      description:
        "Educational website about the Cooper Black font. Built using HTML, CSS, and JavaScript.",
      link: "https://allaboutcooperblack.jackkershaw.net/",
      github_link: "https://github.com/jones58/Cooper-Black-Info-Site",
      image_folder: "cooper-black",
    },
    {
      title: "Jobseeker",
      description:
        "Frontend job boards collected in one place. Built using React and Tailwind CSS.",
      link: "https://jobseeker.jackkershaw.net/",
      github_link: "https://github.com/jones58/jobseeker",
      image_folder: "jobseeker",
    },
  ];

  return (
    <div className="mb-10 flex flex-col">
      <section>
        <p className="text-xl">
          Websites that Jack has worked on. You can follow his progress{" "}
          <a
            href="https://progress.jackkershaw.net"
            target="_blank"
            className="text-black hover:text-ykb"
          >
            here
          </a>{" "}
          and see some of his favourite learning resources{" "}
          <a
            href="https://github.com/jones58/Learning-Resources"
            target="_blank"
            className="text-black hover:text-ykb"
          >
            here
          </a>
          .
        </p>
      </section>
      <section>
        <ol className="flex flex-col">
          {projects.map((project, index) => (
            <li
              key={index}
              className="grid grid-cols-1 lg:grid-cols-4 border border-gray-200 my-4 lg:my-8 p-4 rounded-lg"
            >
              <a
                href={project.link}
                target="_blank"
                className="col-span-2"
              >
                <img
                  src={`/coding-page/${project.image_folder}/desktop.jpg`}
                  alt={`desktop view of ${project.title}`}
                  className="w-full h-auto border border-gray-300 rounded-lg mb-2 lg:mb-0"
                />
              </a>
              <div className="lg:col-span-1 lg:ml-4">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-2">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="block bg-ykb text-white rounded-lg py-2 px-4 text-center hover:bg-ykbdark"
                >
                  View Website
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  className="block mt-2 bg-ykb text-white rounded-lg py-2 px-4 text-center hover:bg-ykbdark"
                >
                  View Github
                </a>
              </div>
              <div className="lg:col-span-1 flex flex-row justify-center">
                <div className="hidden lg:block pl-5">
                  <img
                    src={`/coding-page/${project.image_folder}/mobile.jpg`}
                    alt={`mobile view of ${project.title}`}
                    className="rounded-lg border border-gray-300 max-h-80"
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <div>
        <MyTechStack />
      </div>
    </div>
  );
}

export default CodingContent;
