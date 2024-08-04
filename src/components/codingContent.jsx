import MyTechStack from "./my-tech-stack";

function CodingContent() {
  const projects = [
    {
      title: "Starfish Energy",
      description: [
        "Won the Tech Zero x Kraken Hackathon in July 2024, with an open-source project which sets out to encourage neighbours to share and grow their solar capacity.",
        "We now have £20,000 and mentorship from Octopus Energy to help us develop this in our free time.",
        "Working on a dashboard with React and Tailwind which integrates a Mapbox community map with Google's Solar API.",
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
        "Gathered inspiration in an Are.na folder, creating moodboards and wireframes in Figma.",
        "Set up WordPress as CMS on a subdomain of the main site (admin.farefreelondon.org)",
"Used Responsively to improve the responsive design.","Used back to top and get involved buttons for better user navigation and to drive traffic.","I debugged an issue with the security of the signup form, moving requests to the server-side through an API route to Airtable","I implemented Deploy hooks with Vercel and Wordpress Webhooks for automatic site rebuilds.","I used Unlighthouse to improve the SEO, perfomance and accessibility of all pages on the site.","I improved Largest Contentful Paint (LCP) from 11.3s to 2.8s by using Next/Image for image optimization, dynamic imports for lazy loading, and optimizing images with the 'sharp' package. This boosted the Lighthouse performance score from 67 to 96.", "I enhanced SEO with meta tags, canonical tags, and Google Search Console integration.","Integrated Umami analytics for tracking","Responded to public user feedback in Github Issues.",
      ],
      link: "https://www.farefreelondon.org/",
      github_link: "https://github.com/jones58/fare-free-london",
      image_folder: "farefreelondon",
    },
    {
      title: "Right to the City",
      description: [
        "Freelance project for a festival in London.",
        "Set up animations using Framer Motion.",
        "Added some template event data in JSON, made an event card component and added it to the events section using .map() to go through the data and create a new card for each.",
        "Implemented a custom Tailwind utility for variable font settings.",
        " I created a custom colour scheme inspired by the poster, updating it to something more bright and fresh for the web.","I built a form using Tailwind and Material Design principles, and linked it to an Airtable spreadsheet, debugging the API using Postman and adjusting the JSON format as necessary.","I improved accessibility and SEO with Google Lighthouse and WCAG tools, and replaced alerts with SweetAlert2 for better user feedback and accessibility.","I added a back to top button to improve navigation on the site.",
      ],
      link: "https://right-to-city.netlify.app/",
      github_link: "https://github.com/jones58/right-to-city/",
      image_folder: "righttothecity",
    },
    {
      title: "Vital Signs",
      description: [
        "Freelance project for a group of NHS workers. I used Next.js and Headless Wordpress to build a fast, secure and easy to update site.",
        "I used a Vercel Next.js and Wordpress example to bootstrap the project, and set up WordPress hosting with GraphQL.",
"I used dummy content for testing, addressing issues like image errors and font loading by referring to the Next.js docs, adjusting configuration files and using Next/font.",
        "I used Figma to create the design of the site and implemented it with Tailwind and Iconify, adding animations with Framer Motion.",
        "I improved SEO using the Next.js docs, OpenGraph.xyz to test social share links and the NPM package next-sitemap. I used Advanced Custom Fields to create a PDF uploader in the Wordpress editor and displayed this as an embed, with an anchor tag to view the pdf full screen. I created a guide for the client to help them edit site content easily and resolved their issues with PDF loading on mobile browsers. I used Wordpress webhooks connected to Vercel Deploy Hooks to trigger a site rebuild when posts are created, updated or deleted.",
      ],
      link: "https://www.vitalsignsmag.org/",
      github_link: "https://github.com/jones58/vital-signs/",
      image_folder: "vitalsigns",
    },
    {
      title: "London Brutalist Map",
      description: [
        "I released this an update to my previous Brutalist Map, originally built in HTML and vanilla JavaScript. After finding the JavaScript codebase of the original project challenging to navigate, I chose to rebuild it using React, for its component-based architecture, and Tailwind for CSS efficiency.",
        "Transitioning from the Mapbox CDN to the react-map-gl NPM package enabled me to use the GEOJSON data locally, facilitating easier editing. It also encouraged me to create a multi-page site, enhancing the user experience by offering various ways to engage with the data.",
        "I introduced React Router for navigation and page management, including a 404 error page to handle missing routes. I learnt to use APIs with JavaScript’s fetch() and applied this knowledge to React. I responded to user feedback by adding a custom marker to handle hover events and implemented state management to control marker interactions.",
        "I transformed SVG icons to React TSX components using an online tool - to allow for easier editing. This project enabled me to develop my skills in React, TypeScript, Tailwind while enhancing the user experience with more dynamic and interactive features.",
      ],
      link: "https://brutalistmap.jackkershaw.net/",
      github_link: "https://github.com/jones58/brutalist-map-2/",
      image_folder: "brutalist-map",
    },
    {
      title: "Daily Challenges",
      description: [
        "I made this to keep track of the daily games I like to play. I learnt to use local storage to store visited sites for a day at a time, as well as using CSS Animations. I responded to user feedback by changing the colour scheme and added an introduction screen to improve usability.  I used Google Lighthouse to improve the speed and accessibility of the site, achieving a score of 100 across all categories.",
      ],
      link: "https://dailychallenges.jackkershaw.net",
      github_link: "https://github.com/jones58/daily-challenges/",
      image_folder: "daily-challenges",
    },
    {
      title: "Typespotting",
      description: [
        "I built this after noticing a gap in existing typography games, which typically focus on multiple-choice questions. I used a mind map to come up with the idea for the project (Where's Wally but for Cooper Black), categorised images into difficulty levels, and applied a bold, contrasting colour scheme.",
        "I created SVG graphics using Photoshop and Illustrator and optimised images with an Image Optimiser app, ensuring the game was responsive and fast.",
        " This was my first time using pseudocode to manage complex JavaScript functions for randomising colour schemes and managing click events so it allowed me to develop my JavaScript knowledge quickly through extensive debugging.",
      ],
      link: "https://typespotting.jackkershaw.net/",
      github_link: "https://github.com/jones58/typespotting/",
      image_folder: "typespotting",
    },
    {
      title: "All About Cooper Black",
      description: [
        "I developed this educational website about the famous font to improve my vanilla CSS skills and develop a bold, colourful (but functional) colour scheme to match the font's playfulness.",
      ],
      link: "https://allaboutcooperblack.jackkershaw.net/",
      github_link:
        "https://github.com/jones58/Cooper-Black-Info-Site/",
      image_folder: "cooper-black",
    },
    {
      title: "London Frontend Jobs",
      description: [
        "I decided to build this tool for my classmates and me, after finding that existing workarounds to check job boards, like RSS or keeping lots of tabs open, were insufficient. I used Framer Motion for the first time to add animations, explored Tailwind for rapid prototyping and used React Confetti to add confetti when all of the sites have been opened.",
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
                        className="text-neutral-900 py-2 text-xl"
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
