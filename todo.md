## New colour scheme

Keep refining the colour scheme

fix footer contact form text on light mode

fix dark mode colour scheme, tbh should just be light mode and no dark mode for now i think
something like
#282c35 maybe

Set hover:text-ykb on all a elements, don't use hover underline. hover:text-ykbdark if in footer

Check to see if colours in all pages fit: bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 . In most cases the lighter colours will need to be made lighter.

Add to readme:
I moved to a more neutral colour scheme with ykb blue just used for accents rather than the whole site.
bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100

## Coding

- redo the design of this page to be something [like this](https://www.emnuel.xyz/)
- Fix layout so don't have to scroll down so much
- Each project opens own page - like with design page, use a component layout to get it consistent.
- add a little bit about what new things you learnt or what was challenging for each project - make it a mini version of readme in github tbh.
- For the coding projects include some process images ie research, early sketches, prototypes , feedback collection etc.
- update portfolio images - maybe use puppeteer to get this done dynamically.
- fix images, tbh should be able to autogenerate these with puppeteer or such, at least something in build stage. look into.

## Sitewide

- Add some animations! Look into cool things to do with Astro transitions etc.
  - framer motion or gsap too
  - css animations site that used with daily challenges site.
- Use Dribble, and other inspiration sites to copy good design
- Unprofessional, needs to be polished
- check site design across mobile.

some portfolio examples for inspiration: https://www.are.na/jack-kershaw/portfolio-khzymlhkihk

## Design

- Lay out each design on a page when click on it.
- For the design work include some process images ie research, early sketches, prototypes , feedback collection etc.
- Use as inspo to improve how design page looks: [Pentagram](https://www.pentagram.com/) and [MOMA](https://www.moma.org/calendar/exhibitions/5657s)
- pelicula - present like this: https://tosche.net/fonts/dossier

## Accessibility

- use audit thing in dev environment , make edits it suggests particularly for accessibility.
- use lighthouse and make suggested edits.
- Make clickable bits of header accessible on keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#clickable_elements_must_be_focusable_and_should_have_interactive_semantics

## Write Blog Posts

- see ideas in [drafts folder](src/pages/blog/_drafts)
