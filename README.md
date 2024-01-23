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
- I ran Google Lighthouse to check accessibility. While I was happy with the scores (100, 85, 100, 91), I realised there was more I could be doing for accessibility so I added meta description and increased the maximum scale to 5 in my 'index.html' according to the reccommendations.
- Further to this, I ran Axe developer tools in my developer tools section and was advised to remove: "maximum-scale=5, user-scalable=no" from the 'index.html' file because it does not support accessibility for people with low vision who need magnification to see the content.
- Axe Developer tools also reccommended I add landmarks, [ARIA roles](https://dequeuniversity.com/rules/axe/4.8/region?application=AxeFirefox) to the page to make it more accessible to screen readers.

## !TO DO

### Header : done

### Footer : done

### Contact: done

### Coding :

- fix images overhanging.

### Design :

- add descriptions, uncomment <p></p>

- typo colourful designs

### Opening page

- should have some wow factor, not necessarily typing text but something else.
- add image
- my cv button
- coding button

### sitewide

- change colour scheme, use tailwindcss colors.

- set font to helvetica or similar like neue haas grotesk
- https://www.are.na/gemma-copeland/good-footers-9eibsw2ipzm
- see nextcloud todo list for next steps on learning react.
- shadow colour ykb or dominant color like on the design page
- Make clickable bits accessible on keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#clickable_elements_must_be_focusable_and_should_have_interactive_semantics

### Maybe later:

- a little more gap between elements
- Add hero icons/font awesome icons for header: https://heroicons.dev/?search=x.
- add react router DOM so can navigate between pages - e.g. clicking where next goes to contact page.
- Mobile Navbar as full page, scrollable like on wired.com
- pelicula - present like this: https://tosche.net/fonts/dossier
- add icons from font awesome: https://fontawesome.com/icons/github?f=brands&s=solid
- test with jest while learning - see last section of front end roadmap

## How to run locally

- clone the repo
- npm install
- npm run dev

## How to deploy

- npm run build
