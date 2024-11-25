function CodingContent() {
  const projects = [
    {
      title: "Pluto Power",
      description: [
        "Won the Tech Zero x Kraken Hackathon in July 2024 with a project that encourages neighbours to share and expand solar capacity, resulting in a £20,000 prize and mentorship from Octopus Energy.",
        "Currently building an open-source product in Next.js, integrating an open-source map, authentication with NextAuth and AWS Cognito and the Google Solar API.",
      ],
      link: "https://plutowebsite.vercel.app/",
      github_link: "https://github.com/jones58/Website",
      image_folder: "starfish",
    },

    {
      title: "Take Back Water",
      description: [
        "Employed as a contractor within a team of developers.",
        "Worked on accessibility and performance, reaching a score of 100 across all categories on Lighthouse.",
        "Developed and tested new React components with Storybook and SASS.",
        "Upgraded the SEO of the site with meta tags.",
        "Improved my Git workflow and team-working skills.",
      ],
      link: "https://takebackwater.uk",
      image_folder: "takebackwater",
    },
    {
      title: "London Brutalist Map",
      description: [
        "Improved developer and user experience by rebuilding my previous HTML project in React.",
        "Deployed a multi-page site with React Router for navigation and offers various ways to engage with the data, including custom markers for enhanced interactivity.",
        "Used a mixture of Tailwind CSS and SASS, to create a consistent and accessible design.",
        "Responded to user feedback by adding a custom marker to handle hover events.",
      ],
      link: "https://brutalistmap.jackkershaw.net/",
      github_link: "https://github.com/jones58/brutalist-map-2/",
      image_folder: "brutalist-map",
    },
    {
      title: "Fare Free London",
      description: [
        "Freelance project for a public transport campaign.",
        "Used Next.js and Headless Wordpress to build a fast, secure and easy to update site.",
        "Debugged an issue with the security of the signup form, moving requests to the server-side through an API route to Airtable.",
        "Improved Lighthouse performance score from 67 to 96 by using Next/Image for image optimisation and dynamic imports for lazy loading.",
        "Responded to public user feedback in Github Issues.",
      ],
      link: "https://www.farefreelondon.org/",
      github_link: "https://github.com/jones58/fare-free-london",
      image_folder: "farefreelondon",
    },
    {
      title: "Right to the City",
      description: [
        "Freelance project for a festival in London.",
        "Implemented a custom Tailwind utility for variable font settings.",
        "Built a sign up form using Material Design principles, linked it to an Airtable spreadsheet. This involved debugging the JSON data using Postman.",
        "Added a back to top button to improve navigation on the site.",
      ],
      link: "https://right-to-city.netlify.app/",
      github_link: "https://github.com/jones58/right-to-city/",
      image_folder: "righttothecity",
    },
    {
      title: "Vital Signs",
      description: [
        "Freelance project for a group of NHS workers.",
        "Used dummy content for testing, addressing issues like image errors and font loading by referring to the Next.js docs.",
        "Used Advanced Custom Fields to create a PDF uploader in the Wordpress editor.",
        "Created a guide for the client to help them edit site content easily.",
        "Used Wordpress webhooks connected to Vercel Deploy Hooks to trigger a site rebuild when posts are created, updated or deleted.",
      ],
      link: "https://www.vitalsignsmag.org/",
      github_link: "https://github.com/jones58/vital-signs/",
      image_folder: "vitalsigns",
    },
    {
      title: "Daily Challenges",
      description: [
        "Learnt to use local storage to store visited sites for a day at a time.",
        "Responded to user feedback by changing the colour scheme and adding CSS animations for visual interest.",
        "Added an introduction screen to improve usability.",
        "Used Google Lighthouse to improve the speed and accessibility of the site, achieving a score of 100 across all categories to improve user experience.",
      ],
      link: "https://dailychallenges.jackkershaw.net",
      github_link: "https://github.com/jones58/daily-challenges/",
      image_folder: "daily-challenges",
    },
    {
      title: "Typespotting",
      description: [
        "Used a mind map of existing typography games to come up with the idea for the project (Where's Wally but for Cooper Black).",
        "Created SVG graphics using Adobe Illustrator and optimised images with an Image Optimiser app, ensuring the game was responsive and fast.",
        "Planned complex JavaScript functions with pseudocode to manage game logic.",
      ],
      link: "https://typespotting.jackkershaw.net/",
      github_link: "https://github.com/jones58/typespotting/",
      image_folder: "typespotting",
    },
    {
      title: "London Frontend Jobs",
      description: [
        "Explored React and Tailwind for rapid prototyping.",
        "Used an NPM package to add confetti when all of the sites have been opened.",
        "Added animations with Framer Motion.",
      ],
      link: "https://jobseeker.jackkershaw.net/",
      github_link: "https://github.com/jones58/jobseeker/",
      image_folder: "jobseeker",
    },
    {
      title: "Deployment Dashboard",
      description: [
        "A learning project for a new Python framework, FastHTML.",
        "Used Tailwind via CDN to build a working prototype.",
        "Made extensive use of the FastHTML Docs and Discord to understand features such as a built-in SQLite database.",
      ],
      link: "https://deployment-dashboard-eight.vercel.app/",
      github_link: "https://github.com/jones58/deployment-dashboard",
      image_folder: "deployment-dashboard",
    },
    {
      title: "Knowledge Wiki",
      description: [
        "Used Astro and Starlight to build a fast and sustainable documentation site.",
        "Applied Python scripts to edit existing Markdown files and extract collections of .webloc files to new Markdown files.",
        "Prioritised an accesible format for my knowledge, which I have already shared with peers and those seeking to learn more about new technologies.",
      ],
      link: "https://knowledgewiki.jackkershaw.net/",
      github_link:
        "https://github.com/jones58/personal-knowledge-wiki",
      image_folder: "knowledge-wiki",
    },
  ];

  return (
    <div className="mb-10 flex flex-col ">
      <section className="sm:max-w-2xl">
        <p className="text-xl sm:text-2xl">
          These projects showcase my passion for creating beautiful and
          functional digital experiences. I specialise in building
          responsive, user-friendly sites using modern web technologies
          such as Next.js, React, Astro and Tailwind. I'm constantly
          expanding my skillset to deliver custom solutions.
        </p>
      </section>
      <section>
        <ol className="flex flex-col">
          {projects.map((project, index) => (
            <li
              key={index}
              className="grid grid-cols-1 lg:grid-cols-4 border border-neutral-300 my-4 lg:my-8 p-4 rounded-lg"
            >
              <a
                href={project.link}
                target="_blank"
                className="col-span-2"
              >
                <img
                  src={`/coding-page/${project.image_folder}/desktop.jpg`}
                  alt={`desktop view of ${project.title}`}
                  className="w-full h-auto border border-neutral-300 rounded-lg mb-6 lg:mb-0"
                />
              </a>
              <div className="lg:col-span-2 lg:ml-4 flex-col flex justify-between">
                <div>
                  <h3 className="text-3xl pb-4">{project.title}</h3>
                  <ul className="list-disc px-5 pb-4">
                    {project.description.map((paragraph, index) => (
                      <li
                        key={index}
                        className="text-neutral-900 py-1 text-lg sm:text-xl"
                      >
                        {paragraph}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-col flex justify-between space-y-4">
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      className=" bg-ykb text-neutral-100 rounded-lg py-2 px-4 text-center hover:bg-ykbdark"
                    >
                      Read More on Github
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      className=" bg-ykb text-neutral-100 rounded-lg py-2 px-4 text-center hover:bg-ykbdark"
                    >
                      View Website
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default CodingContent;
