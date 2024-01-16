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

## Building and Debugging

- Bootstrapped with React + Vite
- Imported the Html from [my old portfolio](https://github.com/jones58/portfolio), this involved splitting the code into JSX files for React. This was one of the main reasons for switching to React - being able to have easily editable components like the footer and header, rather than repeating them on every page.
- Changed the colour scheme to reflect my favourite blue (#002FA7)
- Used events to add js inside jsx for the dark mode toggle.
- Used useState to change the main content of the page when elements in the header are clicked. This saved me having to have separate html files for each page, as [before](https://github.com/jones58/portfolio).
- Edited color scheme within tailwind.config.js using shades of blue from above.
- While building the coding section, I realised that I could use a map function to generate elements and avoid having to write everything out by hand. This will allow me to easily add any future projects.
- I originally started with screenshots of both mobile and desktop, but this felt a bit plain so i decided to make a phone mockup using photoshop and [Facebook design resources](https://design.facebook.com/toolsandresources/devices/).
- I realised that images weren't loading properly for my production build, so I put them in public as per the (Vite documentation)[https://vitejs.dev/guide/assets.html#importing-asset-as-url].
- I fixed layout issues using `border-2 border-black` for Tailwind CSS and `console.log("test")` for JSX.
- I took each page and component at a time - this helped speed up my workflow, as I could easily debug each one at a time and remain focussed.

## !TO DO

### Header : done

### Footer : done

### Opening page

- should have some wow factor, not necessarily typing text but something else.
- add image

### Contact

- fix contact form, look at examples of tailwindcss react forms
- just email and message on the form.
- linkedin, email etc. at bottom buttons.

### Coding

- work out why images aren't loading on build.

### Design

- remove redundant classnames.
- pelicula - present like this: https://tosche.net/fonts/dossier

### sitewide

- change design
  - colour scheme, use tailwindcss colors.
  - look through inspo/sites i like like fourtet site.
  - https://www.tailwindshades.com/
- set font to helvetica or similar like neue haas grotesk

-https://www.are.na/gemma-copeland/good-footers-9eibsw2ipzm

- see nextcloud todo list for next steps on learning react .
- hide navbar on mobile launch, click to open it up kind of like on: https://www.apple.com/uk/ also see other examples https://www.pentagram.com/
- use livesurface to make mockups for portfolio
- google lighthouse score
- archive old portfolio and reconfigure on netlify.
- Test everything on a big desktop screen.
- add new photos for portfolio mobile desktop

### Maybe later:

- Animate dots on coding one, maybe with picture of face
- Add hero icons for header: https://heroicons.dev/?search=x
- add react router DOM so can navigate between pages - e.g. clicking where next goes to contact page.

## How to run locally

- Clone the repo
- npm install
- npm run dev

## How to deploy

- npm run build
