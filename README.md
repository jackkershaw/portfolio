# My Portfolio

## Planning

- Generated shades for the colour scheme based on my favourite blue, Yves Klein Blue(#002FA7), plain black and white and orangepeel (#FFA630)
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
- #### Opening page
  - I missed the typing animation of [my first portfolio](https://github.com/jones58/portfolio) so I looked for a way to do that. While I could rewrite all the JS, it seemed like an easier way would be using [Typist](https://github.com/jstejada/react-typist), so i implemented this with NPM, as a React Hook. This wasn't compatible with my version of React, so I looked in the Github issues section for Typist and found an alternative: [react-typewriter](https://www.npmjs.com/package/react-typewriter). This also didn't work with my version of React, so I continued to look on github, test installing with NPM and eventually got [react-use-typing-effect](https://www.npmjs.com/package/react-use-typing-effect) working.
- Following some user feedback, I was told that a few things needed change on mobile to make it snappier. I interpreted the user feedback and wrote code for the following in my header.jsx:
  - when on a page, highlight that page in menu: this involved setting a classname for text to be orange if on that page, with state setting the initial, opening page.
  - when click on menu item, menu closes (on mobile) - this was done by toggling the nav bar on click - using state just as opening it does. I wrapped the two functions in another, function to handle header clicks.
  - change hover/active color for Navbar: I accomplished this by setting the text color to orange on hover and white on active. This was in the set headerstyle function, again wrapped in the handle header click function. This made me realise how powerful combining functions, particularly in React, can be.

## Roadmap

(some things I want to do later)

- rebuild form with a backend/using express js, node or such.
- set font to helvetica or similar like neue haas grotesk
- see nextcloud todo list for next steps on learning react and use this to learn them.
- change colour scheme, use tailwindcss colors. // shadow colour ykb or dominant color.
- a little more gap between elements
- Add hero icons/font awesome icons for header: https://heroicons.dev/?search=x.
- add react router DOM so can navigate between pages - e.g. clicking where next goes to contact page.
- Mobile Navbar as full page, scrollable like on wired.com
- pelicula - present like this: https://tosche.net/fonts/dossier
- add icons from font awesome: https://fontawesome.com/icons/github?f=brands&s=solid
- test with jest while learning - see last section of front end roadmap
- speech bubble on opening page, scribbled in.
- on opening page:
  - my cv button (fa icon wrapped in button probably)
  - coding button (fa icon wrapped in button probably)
- accesibility improved reccommended by MDN:
  - Make clickable bits of header accessible on keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#clickable_elements_must_be_focusable_and_should_have_interactive_semantics

## How to run locally

- clone the repo
- npm install
- npm run dev

## How to deploy

- npm run build
