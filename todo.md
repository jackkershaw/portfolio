# To do list

Use Dribble, and other inspiration sites to copy good design

Color scheme - make new scheme, use ykb as an accent colour, make a dark scheme and light scheme with better colours.

Fix layout so don't have to scroll down so much

Pdf not right size, needs to be more on view

Unprofessional, needs to be polished

add some animations!

## Header - mobilex

- mobile header should look like this [top app](https://m3.material.io/components/top-app-bar/overview)
- Add iconify icons for hamburger and cross
- remember to keep looking through examples you like

## Design

- Lay out each design on a page when click on it.
  - use a component layout to get it consistent.
  - can just make 10 subpages rather than building something more dynamic with local api etc.
- For the design work include some process images ie research, early sketches, prototypes , feedback collection etc.
- Use as inspo to improve how design page looks: [Pentagram](https://www.pentagram.com/)
- pelicula - present like this: https://tosche.net/fonts/dossier

## Blog

- see ideas in [drafts folder](src/pages/blog/_drafts)
- improve design on different screens and lining things up.

## Accessibility

- use audit thing in dev environment , make edits it suggests particularly for accessibility.
- use lighthouse and make suggested edits.
- Make clickable bits of header accessible on keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#clickable_elements_must_be_focusable_and_should_have_interactive_semantics

## Coding page

- something [like this](https://www.emnuel.xyz/)
- Each project opens own page - like with design page, use a component layout to get it consistent.
- add a little bit about what new things you learnt or what was challenging for each project - make it a mini version of readme in github tbh.
- For the coding projects include some process images ie research, early sketches, prototypes , feedback collection etc.
- update portfolio images - maybe use puppeteer to get this done dynamically.

## Other / sitewide

- edit 404 page to be like design page text. link back to home page.
- system theme dark theme light theme like on [here](https://alexworradandrews.com/)
- test with jest while learning - see last section of front end roadmap
- some animations? Look into cool things to do with Astro transitions etc.
  - framer motion or gsap too
  - css animations site that used with daily challenges site.

## Footer

- fix footer drifiting on some pages like blog page.
- add scroll to top/back to top back into footer.
- put contact form in footer

## some portfolio examples for inspiration: https://www.are.na/jack-kershaw/portfolio-khzymlhkihk

Keep going with Astro tutorial from [here](https://docs.astro.build/en/tutorial/6-islands/)

- (later) follow tutorial [here](https://docs.astro.build/en/tutorial/5-astro-api/2/) on making tag pages for blog. Good for learning about dynamic routing and getstaticpaths() too

rewrite this bit:

#### Opening page

- Following some user feedback, I was told that a few things needed change on mobile to make it snappier. I interpreted the user feedback and wrote code for the following in my header.jsx:
  - when on a page, highlight that page in menu: this involved setting a classname for text to be orange if on that page, with state setting the initial, opening page.
  - change hover/active color for Navbar: I accomplished this by setting the text color to orange on hover and white on active. This was in the set headerstyle function, again wrapped in the handle header click function. This made me realise how powerful combining functions, particularly in React, can be.

Use traditional design structure - Material Design
