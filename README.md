# My Portfolio

## Planning

- I originally built this site in vanilla HTML, CSS and JS. As the project expanded it became harder to edit, so I decided to use React and Vite with Tailwind CSS. Later I migrated it to Astro in order to add some new features(see below).
- Generated shades for the colour scheme based on my favourite blue, Yves Klein Blue(#002FA7), plain black and white and orangepeel (#FFA630).
- Redesigned [my old portfolio](https://github.com/jones58/portfolio) in Figma. Using the "html.to.design" plugin proved to be very helpful. Whilst this was probably a bit overkill for this project, this could be a good workflow for other projects.
- Thought about the components that make up my website - this was useful for helping the move to React.

## Building and Debugging

- Bootstrapped with React + Vite
- Imported the Html from [my old portfolio](https://github.com/jones58/portfolio), this involved splitting the code into JSX files for React. This was one of the main reasons for switching to React - being able to have easily editable components like the footer and header, rather than repeating them on every page.
- Changed the colour scheme to reflect my favourite blue (#002FA7), calling it ykb within tailwind.config.js.
- While building the coding section, I realised that I could use a map function to generate elements and avoid having to write everything out by hand. This will allow me to easily add any future projects.
- I originally started with screenshots of both mobile and desktop, but this felt a bit plain so i decided to make a phone mockup using photoshop and [Facebook design resources](https://design.facebook.com/toolsandresources/devices/).
- I realised that images weren't loading properly for my production build, so I put them in public as per the (Vite documentation)[https://vitejs.dev/guide/assets.html#importing-asset-as-url].
- I fixed layout issues using `border-2 border-black` for Tailwind CSS and `console.log("test")` for JSX.
- I took each page and component at a time
  - this helped speed up my workflow, as I could easily debug each one at a time and remain focussed.
- I ran Google Lighthouse to check accessibility. While I was happy with the scores (100, 85, 100, 91), I realised there was more I could be doing for accessibility so I added meta description and increased the maximum scale to 5 in my 'index.html' according to the reccommendations.
- Further to this, I ran Axe developer tools in my developer tools section and was advised to remove: "maximum-scale=5, user-scalable=no" from the 'index.html' file because it does not support accessibility for people with low vision who need magnification to see the content.
- Set font to [Neue Haas Unica](https://fontsinuse.com/typefaces/38883/neue-haas-unica), a typeface by one of my favourite type designers, [Toshi Omagari](http://tosche.net/). The easiest way to set this was changing the default fonts in tailwind.config.js., and set font-face in index.css.

#### Opening page

- Following some user feedback, I was told that a few things needed change on mobile to make it snappier. I interpreted the user feedback and wrote code for the following in my header.jsx:
  - when on a page, highlight that page in menu: this involved setting a classname for text to be orange if on that page, with state setting the initial, opening page.
  - change hover/active color for Navbar: I accomplished this by setting the text color to orange on hover and white on active. This was in the set headerstyle function, again wrapped in the handle header click function. This made me realise how powerful combining functions, particularly in React, can be.

## Moving to Astro

- In late February 2024, I decided I wanted to migrate the site, in React, Vite and Tailwind CSS, to Astro. It took me a relatively short amount of time to edit my codebase and I was very happy with the result.
- I wanted to do this because it would allow me to easily add a blog to my site, and tinker with different frameworks such as Svelte and Vue within one project.
- I had some problems using Font Awesome icons in Astro, so I decided to use SVGs instead, from FreeCodeCamp and [Iconify](https://iconify.design/).

## Blog

- One of the advantages of moving to Astro was that I could use Markdown files to make a blog. I followed the [tutorial](https://docs.astro.build/en/tutorial/0-introduction/) in the Astro Docs to get the basics down. This tutorial was really helpful, teaching me about YAML Frontmatter, Astro props and how to setup RSS.
- Added [the tailwindcss-typography plugin](https://github.com/tailwindlabs/tailwindcss-typography) to allow me to use the prose class to style md content. This adds spaces between lines and makes big blocks of text easier to read.

## Other Improvements

- Added the Astro JS Sitemap plugin to improve SEO by generating a sitemap xml.
- Following some user feedback, I added labels to the icons for my tech stack on the main page.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
