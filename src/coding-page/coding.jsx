function Coding() {
  const projects = [
    {
      title: "Daily Challenges",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
    },
    {
      title: "Typespotting",
      description: "I like fonts.",
      link: "https://dailychallenges.jackkershaw.net",
    },
    {
      title: "London Brutalist Map",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
    },
    {
      title: "Daily Challenges",
      description:
        "My partner and I both like to play Wordle adjacent games so I made this website.",
      link: "https://dailychallenges.jackkershaw.net",
    },
  ];

  return (
    <>
      <div className="space-between bottom-30 mx-5 flex flex-col">
        <section>
          <p className="max-w-max py-4 text-2xl sm:text-3xl">
            Projects I've built while learning to code. You can follow my
            progress{" "}
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
          <ol>
            {projects.map((project, index) => (
              <div>
                <iframe src={project.link}></iframe>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  className="shadow-md hover:underline lg:shadow-none"
                >
                  <p>Click here to view full site</p>
                </a>
                <iframe src={project.link}></iframe>
              </div>
            ))}
          </ol>
        </section>
        <section>
          <h3>Where next?</h3>
        </section>
      </div>
    </>
  );
}

export default Coding;
