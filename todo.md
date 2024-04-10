# To do list

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

- add scroll to top/back to top back into footer.
- icons to bottom right

## Header

- edit header so orange for selected header item.
- Add iconify icons for hamburger and cross

## Project structure

- Add project structure like this to Readme:
  i think there's a github repo for generating these somewhere.

  ## 🚀 Project Structure

  The project is built of the following files and folders:

  ```text
  /
  ├── public/
  │   └── favicon.svg
  ├── src/
  │   ├── components/
  │   │   └── Card.astro
  │   ├── layouts/
  │   │   └── Layout.astro
  │   └── pages/
  │       └── index.astro
  └── package.json
  ```

## some portfolio examples for inspiration: https://www.are.na/jack-kershaw/portfolio-khzymlhkihk

Keep going with Astro tutorial from [here](https://docs.astro.build/en/tutorial/6-islands/)

- (later) follow tutorial [here](https://docs.astro.build/en/tutorial/5-astro-api/2/) on making tag pages for blog. Good for learning about dynamic routing and getstaticpaths() too
