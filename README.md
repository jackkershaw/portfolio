# My Portfolio

## Planning

- Generated shades for the colour scheme using [Tailwind Shades](https://www.tailwindshades.com/) based on my favourite blue, Yves Klein Blue:

```jsx
ykb: {
         DEFAULT: "#002FA7",
         50: "#608CFF",
         100: "#4B7EFF",
         200: "#2260FF",
         300: "#0046F9",
         400: "#003AD0",
         500: "#002FA7",
         600: "#001F6F",
         700: "#000F37",
         800: "#000000",
         900: "#000000",
         950: "#000000",
       },
```

- Redesigned [my old portfolio](https://github.com/jones58/portfolio) in Figma. Using the "html.to.design" plugin proved to be very helpful. Whilst this was probably a bit overkill for this project, this could be a good workflow for other projects.
- Thought about the components that make up my website - this was useful for helping the move to React.

## Building

- Bootstrapped with React + Vite
- Imported the Html from [my old portfolio](https://github.com/jones58/portfolio), this involved splitting the code into JSX files for React. This was one of the main reasons for switching to React - being able to have easily editable components like the footer and header, rather than repeating them on every page.
- Changed the colour scheme to reflect my favourite blue (#002FA7)
- Used events to add js inside jsx for the dark mode toggle.
- Used useState to change the main content of the page when elements in the header are clicked. This saved me having to have separate html files for each page, as [before](https://github.com/jones58/portfolio).
- Edited color scheme within tailwind.config.js using shades of blue from above.

## Debugging

- I fixed issues using `*{border: 1px solid black}` for Tailwind CSS and `Console.log("test")` for JSX.

## TODO:

### Header : done

### Footer : done

### Opening page

- should have some wow factor, not necessarily typing text but something else.
- add image

### Contact

- fix contact form, look at examples of tailwindcss react forms

### Coding

- fix page structure
- iframes desktop and mobile versions. See: https://rectangle.design/revolutionary-papers/ for inspiration. Get right proportion iframes.

### Videos

- get looking like old site with flex
- remove redundant classnames.

### Design

- remove redundant classnames.

## sitewide

- change design
  - look through inspo/sites i like like fourtet site.
  - redesign it as wireframe in figma.
  - fix css, making it better with React and Tailwind.
    https://www.tailwindshades.com/
  - set font to helvetica or similar like neue haas grotesk
- see nextcloud todo list for next steps on learning react and finishing portfolio.
- use livesurface to make mockups for portfolio
- google lighthouse score

## How to run locally

- Clone the repo
- npm install
- npm run dev

## How to deploy

- npm run build
