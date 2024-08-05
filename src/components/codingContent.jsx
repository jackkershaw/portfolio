import MyTechStack from "./my-tech-stack";

function CodingContent() {
  const projects = [
    {
      title: "Starfish Energy",
      description: [
        "Won the Tech Zero x Kraken Hackathon in July 2024, with a project which sets out to encourage neighbours to share and grow their solar capacity.",
        "My team now have £20,000 and mentorship from Octopus Energy to help us develop this as an open-source project.",
        "Working on a dashboard with React and Tailwind, which integrates a Mapbox community map with the Google Solar API.",
      ],
      github_link: "https://github.com/StarFishEnergy",
      image_folder: "starfish",
    },
    {
      title: "Take Back Water",
      description: [
        "Currently maintaining the Take Back Water website in my free time.",
        "Working on accessibility, upgrading SEO and developing new React components.",
        "Improved my Git workflow and team-working skills.",
      ],
      link: "https://takebackwater.uk",
      image_folder: "takebackwater",
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
      title: "London Brutalist Map",
      description: [
        "Rebuilt my previous HTML project in React, for improved developed and user experience.",
        "Deployed a multi-page site which offers various ways to engage with the data.",
        "Implemented React Router for navigation and page management.",
        "Learnt to use APIs with JavaScript’s fetch() and applied this knowledge to React.",
        "Responded to user feedback by adding a custom marker to handle hover events.",
      ],
      link: "https://brutalistmap.jackkershaw.net/",
      github_link: "https://github.com/jones58/brutalist-map-2/",
      image_folder: "brutalist-map",
    },
    {
      title: "Daily Challenges",
      description: [
        "Learnt to use local storage to store visited sites for a day at a time.",
        "Used CSS Animations.",
        "Responded to user feedback by changing the colour scheme.",
        "Added an introduction screen to improve usability.",
        "Used Google Lighthouse to improve the speed and accessibility of the site, achieving a score of 100 across all categories.",
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
        "Wrote pseudocode to plan complex JavaScript functions, for randomising colour schemes and managing click events.",
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
  ];

  return (
    <div className="mb-10 flex flex-col">
      <section>
        <p className="text-2xl">
          Websites that I've developed. You can follow my progress{" "}
          <a
            href="https://progress.jackkershaw.net"
            target="_blank"
            className="text-neutral-900 hover:text-ykb"
          >
            here
          </a>{" "}
          and see some of my favourite learning resources{" "}
          <a
            href="https://github.com/jones58/Learning-Resources"
            target="_blank"
            className="text-neutral-900 hover:text-ykb"
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
                        className="text-neutral-900 py-1 text-xl"
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
