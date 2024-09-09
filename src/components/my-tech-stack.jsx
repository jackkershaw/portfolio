function MyTechStack() {
  const technologies = [
    {
      name: "HTML",
      href: "https://en.wikipedia.org/wiki/HTML",
      svg: "icon-[akar-icons--html-fill]",
    },
    {
      name: "CSS",
      href: "https://en.wikipedia.org/wiki/CSS",
      svg: "icon-[akar-icons--css-fill]",
    },
    {
      name: "JavaScript",
      href: "https://en.wikipedia.org/wiki/JavaScript",
      svg: "icon-[akar-icons--javascript-fill]",
    },
    {
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      svg: "icon-[akar-icons--typescript-fill]",
    },
    {
      name: "React",
      href: "https://react.dev/",
      svg: "icon-[akar-icons--react-fill]",
    },
    {
      name: "Tailwind",
      href: "https://tailwindcss.com",
      svg: "icon-[mdi--tailwind]",
    },
    {
      name: "NodeJS",
      href: "https://en.wikipedia.org/wiki/Node.js",
      svg: "icon-[mdi--nodejs]",
    },
    {
      name: "NPM",
      href: "https://en.wikipedia.org/wiki/Npm",
      svg: "icon-[mdi--npm]",
    },
    {
      name: "Mapbox",
      href: "https://en.wikipedia.org/wiki/Mapbox",
      svg: "icon-[mdi--mapbox]",
    },
    {
      name: "Astro",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Wordpress",
      href: "https://en.wikipedia.org/wiki/WordPress",
      svg: "icon-[simple-icons--wordpress]",
    },

    {
      name: "Git",
      href: "https://en.wikipedia.org/wiki/Git",
      svg: "icon-[mdi--git]",
    },
    {
      name: "Github",
      href: "https://en.wikipedia.org/wiki/GitHub",
      svg: "icon-[mdi--github]",
    },
    {
      name: "Netlify",
      href: "https://www.netlify.com/",
      svg: "icon-[simple-icons--netlify]",
    },
    {
      name: "Figma",
      href: "https://en.wikipedia.org/wiki/Figma",
      svg: "icon-[simple-icons--figma]",
    },
    {
      name: "Photoshop",
      href: "https://en.wikipedia.org/wiki/Photoshop",
      svg: "icon-[file-icons--adobe-photoshop]",
    },
    {
      name: "Illustrator",
      href: "https://en.wikipedia.org/wiki/Adobe_Illustrator",
      svg: "icon-[file-icons--adobe-illustrator]",
    },
    {
      name: "Bridge",
      href: "https://en.wikipedia.org/wiki/Adobe_Bridge",
      svg: "icon-[file-icons--adobe-bridge]",
    },
    {
      name: "Storybook",
      href: "https://storybook.js.org/",
      svg: "icon-[cib--storybook]",
    },
  ];
  return (
    <>
      <h1 className="text-3xl">Technologies I use:</h1>
      <div className="max-w-[100vw] overflow-hidden py-10 group">
        <div className="flex flex-row gap-10 animate-scroll-mobile sm:animate-scroll group-hover:[animation-play-state:paused]">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="card border text-neutral-100 border-neutral-300 rounded-lg p-10 max-w-30 bg-ykb hover:bg-ykbdark active:bg-ykblight"
            >
              <a
                href={item.href}
                target="_blank"
                className="flex flex-col items-center justify-between text-center no-underline"
              >
                <span
                  className={`${item.svg} w-10 h-10 cursor-pointer  `}
                ></span>
                <p className="text-sm mt-2 ">{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyTechStack;
