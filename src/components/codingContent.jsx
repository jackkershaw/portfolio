import MyTechStack from "./my-tech-stack";

function CodingContent() {
  const projects = [
    {
      title: "Starfish Energy",
      description:
        "My team won the Tech Zero x Kraken Hackathon in July 2024, with an open-source Community Energy project which sets out to encourage neighbours to share and grow their solar capacity. We now have £20,000 and mentorship from Octopus Energy to help us develop this in our free time over the next year. As the frontend developer for our three-person team, I am working on a dashboard with React and Tailwind and integrating a community map built in Mapbox with Google's Solar API.",
      github_link: "https://github.com/StarFishEnergy",
      image_folder: "starfish",
    },
    {
      title: "Take Back Water",
      description:
        "I am currently working with a team of developers on maintaining the Take Back Water website in my free time. My responsibilities include improving accessibility, upgrading SEO and developing new React components. This project has enabled me to improve my Git workflow and team-working skills.",
      link: "https://takebackwater.uk",
      image_folder: "takebackwater",
    },
    {
      title: "Fare Free London",
      description:
        "Freelance project for a public transport campaign. I started by gathering inspiration in an Are.na folder, creating moodboards and wireframes in Figma. I based the site on the Vital Signs Next.js project (see below), again incorporating a WordPress backend with WPGraphQL for the API. I set up WordPress on a subdomain of the site(admin.farefreelondon.org) and used Vercel for continuous deployment. I added more editability to the site, whilst retaining a consistent design. I added a colorful SVG tube lines component and used Responsively to improve the responsive design. I used back to top and get involved buttons for better user navigation and to drive traffic. I debugged an issue with the security of the signup form linked to Airtable, by moving requests to the server-side through an API route. I implemented Deploy hooks with Vercel and Wordpress Webhooks for automatic site rebuilds. I used Google Unlighthouse to improve the SEO, perfomance and accessibility of all pages on the site. I improved Largest Contentful Paint (LCP) from 11.3s to 2.8s by using Next/Image for image optimization, dynamic imports for lazy loading, and optimizing images with the 'sharp' package. This boosted the Lighthouse performance score from 67 to 96. I enhanced SEO with meta tags, canonical tags, and Google Search Console integration. I integrated Umami analytics for tracking and responded to public user feedback in Github Issues.",

      link: "https://www.farefreelondon.org/",
      github_link: "https://github.com/jones58/fare-free-london",
      image_folder: "farefreelondon",
    },
    {
      title: "Right to the City",
      description:
        "Freelance project for a festival in London. I began by gathering inspiration in an Are.na folder and wireframing in Figma. I set up animations using Framer Motion and structured the site based on the Figma wireframe, embedding a Google Map and designing responsive components. Added some template event data in JSON (wrapped in a tsx file), made an event card component and added it to the events section using .map() to go through the data and create a new card for each. Using template data and sample images helped me to do the styling of these components. After receiving a draft poster design, I replaced the suggested font with Klima and implemented a custom Tailwind utility for variable font settings. I created a custom colour scheme inspired by the poster, updating it to something more bright and fresh for the web. I built a form using Tailwind and Material Design principles, and linked it to an Airtable spreadsheet, debugging the API using Postman and adjusting the JSON format as necessary. I improved accessibility and SEO with Google Lighthouse and WCAG tools, and replaced alerts with SweetAlert2 for better user feedback and accessibility. I added a back to top button to improve navigation on the site.",
      link: "https://right-to-city.netlify.app/",
      github_link: "https://github.com/jones58/right-to-city/",
      image_folder: "righttothecity",
    },
    {
      title: "Vital Signs",
      description:
        "Freelance project for a group of NHS workers. I used Next.js and Headless Wordpress to build a fast, secure and easy to update site. I used a Vercel Next.js and Wordpress example to bootstrap the project, and set up WordPress hosting with GraphQL. I used dummy content for testing, addressing issues like image errors and font loading by referring to the Next.js docs, adjusting configuration files and using Next/font. I used Figma to create the design of the site and implemented it with Tailwind and Iconify, adding animations with Framer Motion. I improved SEO using the Next.js docs, OpenGraph.xyz to test social share links and the NPM package next-sitemap. I used Advanced Custom Fields to create a PDF uploader in the Wordpress editor and displayed this as an embed, with an anchor tag to view the pdf full screen. I created a guide for the client to help them edit site content easily and resolved their issues with PDF loading on mobile browsers. I used Wordpress webhooks connected to Vercel Deploy Hooks to trigger a site rebuild when posts are created, updated or deleted.",
      link: "https://www.vitalsignsmag.org/",
      github_link: "https://github.com/jones58/vital-signs/",
      image_folder: "vitalsigns",
    },
    {
      title: "London Brutalist Map",
      description:
        "I released this an update to my previous Brutalist Map, originally built in HTML and vanilla JavaScript. After finding the JavaScript codebase of the original project challenging to navigate, I chose to rebuild it using React, for its component-based architecture, and Tailwind for CSS efficiency.  Transitioning from the Mapbox CDN to the react-map-gl NPM package enabled me to use the GEOJSON data locally, facilitating easier editing. It also encouraged me to create a multi-page site, enhancing the user experience by offering various ways to engage with the data. I introduced React Router for navigation and page management, including a 404 error page to handle missing routes. I learnt to use APIs with JavaScript’s fetch() and applied this knowledge to React. I responded to user feedback by adding a custom marker to handle hover events and implemented state management to control marker interactions. I transformed SVG icons to React TSX components using an online tool - to allow for easier editing. This project enabled me to develop my skills in React, TypeScript, Tailwind while enhancing the user experience with more dynamic and interactive features.",
      link: "https://brutalistmap.jackkershaw.net/",
      github_link: "https://github.com/jones58/brutalist-map-2/",
      image_folder: "brutalist-map",
    },
    {
      title: "Daily Challenges",
      description:
        "I made this to keep track of the daily games I like to play. I learnt to use local storage, to store visited sites for a day at a time, as well as using the Animista library for CSS animations.  I responded to user feedback by changing the colour scheme to mirror that of Wordle and added an introduction screen to improve usability for people coming to the site for the first time.  I used Google Lighthouse to improve the speed and accessibility of the site, reaching a score of 100 across all categories.",
      link: "https://dailychallenges.jackkershaw.net",
      github_link: "https://github.com/jones58/daily-challenges/",
      image_folder: "daily-challenges",
    },
    {
      title: "Typespotting",
      description:
        "I built this after noticing a gap in existing typography games, which typically focus on multiple-choice questions or practising kerning. I used a mind map to come up with the idea for the project (Where's Wally but for Cooper Black), categorised images into difficulty levels, and applied a bold, contrasting colour scheme. I created SVG graphics using Photoshop and Illustrator and optimised images with an Image Optimiser app, ensuring the game was responsive and fast. This was my first time using pseudocode to manage complex JavaScript functions for randomising colour schemes and managing click events (checking them against image coordinates). The project enabled me to develop my JavaScript knowledge quickly through extensive debugging, and apply my existing design skills to development.",
      link: "https://typespotting.jackkershaw.net/",
      github_link: "https://github.com/jones58/typespotting/",
      image_folder: "typespotting",
    },
    {
      title: "All About Cooper Black",
      description:
        "I developed this educational website about the famous font to improve my vanilla CSS skills and develop a bold, colourful (but functional) colour scheme to match the font's playfulness.",
      link: "https://allaboutcooperblack.jackkershaw.net/",
      github_link:
        "https://github.com/jones58/Cooper-Black-Info-Site/",
      image_folder: "cooper-black",
    },
    {
      title: "London Frontend Jobs",
      description:
        "I decided to build this tool for my classmates and me, after finding that existing workarounds to check job boards, like RSS or keeping lots of tabs open, were insufficient. I used Framer Motion for the first time to add animations, explored Tailwind for rapid prototyping and used React Confetti to add confetti when all of the sites have been opened.",
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
                  <p className="text-neutral-900 pb-4 text-xl">
                    {project.description}
                  </p>
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
