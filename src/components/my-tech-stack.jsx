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
      name: "React",
      href: "https://react.dev/",
      svg: "icon-[akar-icons--react-fill]",
    },
    {
      name: "Tailwind CSS",
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
      name: "TypeScript",
      href: "https://www.typescriptlang.org/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Python",
      href: "https://en.wikipedia.org/wiki/Python_(programming_language)",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Git",
      href: "https://en.wikipedia.org/wiki/Git",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Github",
      href: "https://en.wikipedia.org/wiki/GitHub",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Astro",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Netlify",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Photoshop",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Figma",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Illustrator",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Bridge",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
    {
      name: "Final Cut Pro",
      href: "https://astro.build/",
      svg: "icon-[simple-icons--astro]",
    },
  ];

  return (
    <div className="mx-auto grid w-full h-auto grid-cols-2 justify-between py-10 sm:grid-cols-4 sm:gap-6 md:grid-cols-6 md:gap-8 lg:grid-cols-8 lg:gap-10">
      {technologies.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          className="flex flex-col items-center justify-center text-center"
        >
          <span className={item.svg}></span>
          <p className="text-sm mt-2">{item.name}</p>
        </a>
      ))}
    </div>
  );
}

export default MyTechStack;
