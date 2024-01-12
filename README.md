# My Portfolio

## Planning

- Redesigned [my old portfolio](https://github.com/jones58/portfolio) in Figma. Using the "html.to.design" plugin proved to be very helpful. Whilst this was probably a bit overkill for this project, this could be a good workflow for other projects.
- Thought about the components that make up my website - this was useful for helping the move to React.

## Building

- Bootstrapped with React + Vite
- Imported the Html and Css from [my old portfolio](https://github.com/jones58/portfolio), this involved splitting the HTML into JSX files for React. This was one of the main reasons for switching to React - being able to have easily editable components like the footer and header, rather than repeating them on every page.
- Changed the colour scheme to reflect my favourite blue (#002FA7)
- Used events to add js inside jsx for the dark mode toggle.
- Used useState to change the main content of the page when elements in the header are clicked. This saved me having to have separate html files for each page, as [before](https://github.com/jones58/portfolio).
- Edited color scheme within tailwind.config.js using shades generated with [Tailwind Shades](https://www.tailwindshades.com/)

## Debugging

## TODO:

- change design

  - look through inspo/sites i like like fourtet site.
  - redesign it as wireframe in figma.
  - fix css, making it better with React and Tailwind.
    https://www.tailwindshades.com/
  - set font to helvetica or similar like neue haas grotesk

- rebuild form at bottom of page - build into footer i think as something slim.
- add dark mode back in
- Finish fireship tutorials react .
- see nextcloud todo list for next steps on learning react and finishing portfolio.
- use scrolltotop function instead of navbar thing.
- add dark mode and other js features back in - will have to learn about state i think.
  - dark mode button button will have to be rebuilt
  - make it so it doesn't work same for prefers dark mode etc.
- use livesurface to make mockups for portfolio

- images instead of iframes for the coding page - desktop and mobile versions. See: https://rectangle.design/revolutionary-papers/ for inspiration.

## How to run locally

- Clone the repo
- npm install
- npm run dev

## How to deploy

- npm run build
