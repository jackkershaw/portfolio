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
    <div className="mx-auto grid w-full h-auto grid-cols-3 justify-between pt-10 sm:grid-cols-4 gap-6 sm:gap-6 md:grid-cols-6 md:gap-8 lg:grid-cols-8 lg:gap-10 text-ykb">
      {technologies.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          className="flex flex-col items-center justify-between text-center"
        >
          <span className={item.svg}></span>
          <p className="text-sm mt-2 text-black">{item.name}</p>
        </a>
      ))}
    </div>
  );
}

export default MyTechStack;
