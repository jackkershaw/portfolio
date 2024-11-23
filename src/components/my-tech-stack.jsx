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
      name: "Next.js",
      href: "https://nextjs.org/",
      svg: "icon-[akar-icons--nextjs-fill]",
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
      name: "Python",
      href: "https://en.wikipedia.org/wiki/Python",
      svg: "icon-[akar-icons--python-fill]",
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
      name: "Vercel",
      href: "https://www.vercel.com/",
      svg: "icon-[simple-icons--vercel]",
    },
    {
      name: "Storybook",
      href: "https://storybook.js.org/",
      svg: "icon-[cib--storybook]",
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
    <div className="py-5">
      <div className="max-w-[100vw] overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3 lg:gap-4">
          {technologies.map((item, index) => (
            <div
              key={index}
              className="card border text-neutral-100 border-neutral-300 rounded-lg p-2 sm:p-4 md:p-2 bg-ykb hover:bg-ykbdark active:bg-ykblight"
            >
              <a
                href={item.href}
                target="_blank"
                className="flex flex-col items-center justify-between text-center no-underline"
              >
                <span
                  className={`${item.svg} w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 cursor-pointer`}
                ></span>
                <p className="text-xs sm:text-sm mt-2">{item.name}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyTechStack;
