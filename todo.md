To do list
- fix mobile look of opening page
- fix mobile nav - hamnburger icon svg, do it as full page, scrollable like on wired.com mobile site.
- use audit thing in dev environment , make edits it suggests particularly for accessibility.
- use lighthouse and make suggested edits.
- maybe bring back typing text on first page
- add sitemap: [
](https://docs.astro.build/en/guides/integrations-guide/sitemap/) to help SEO.
- add blog component served from md files: [
](https://docs.astro.build/en/tutorial/2-pages/) and blog page, including in header. Setup RSS.
- edit 404 page
- system theme dark theme light theme like on [here](https://alexworradandrews.com/)
- add scroll to top/back to top back into footer.
- edit header so orange for selected header item.

- some animations? Look into cool things to do with Astro transitions etc.

- cool theme: [text](https://brutal.elian.codes/)

- rebuild form with a backend/using express js, node or such, or netlify.
- Add hero icons/font awesome icons for header hamburger: https://heroicons.dev/?search=x.
- pelicula - present like this: https://tosche.net/fonts/dossier
- test with jest while learning - see last section of front end roadmap
- speech bubble on opening page, scribbled in maybe
- accesibility improved reccommended by MDN:
  - Make clickable bits of header accessible on keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard?utm_source=devtools&utm_medium=a11y-panel-checks-keyboard#clickable_elements_must_be_focusable_and_should_have_interactive_semantics
  - add icons for tech stack [like on this one](https://www.jackherizsmith.com/#projCaf), technologies you know. Is better to have more visual. Put [icons from technology on here](https://roadmap.sh/frontend)



project structure like this:
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
