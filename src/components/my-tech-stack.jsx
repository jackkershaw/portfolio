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
  ];

  return (
    <>
      <h1 className="text-2xl mb-5">Technologies that Jack uses:</h1>
      <div className="grid h-auto grid-cols-3 justify-between sm:grid-cols-4 sm:gap-4 md:grid-cols-6 md:gap-4 lg:grid-cols-8 lg:gap-4 w-full">
        {technologies.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            className="flex flex-col items-center justify-between text-center"
          >
            <span
              className={`${item.svg} w-10 h-10 cursor-pointer text-neutral-400  hover:text-ykb active:text-ykblight`}
            ></span>
            <p className="text-sm mt-2 ">{item.name}</p>
          </a>
        ))}
      </div>
    </>
  );
}

export default MyTechStack;
