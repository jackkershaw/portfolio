# My Portfolio

- Bootstrapped with React + Vite
- Imported the Html and Css from [my old portfolio](https://github.com/jones58/portfolio), this involved splitting the HTML into JSX files for React. This was one of the main reasons for switching to React - being able to have easily editable components like the footer and header, rather than repeating them on every page.
- Changed the colour scheme to reflect my favourite blue (#002FA7)
-

## TODO:

- change design

  - look through inspo/sites i like like fourtet site.
  - redesign it as wireframe
  - fix css from top down

- don't make it htmls but change the content based on clicks, google and find out about this - it involves state.
- Finish fireship tutorials react .
- see nextcloud todo list for next steps on learning react and finishing portfolio.
- add dark mode and other js features back in - will have to learn about state i think.
- use livesurface to make mockups for portfolio

- merge into header using useeffect:

```
//dark mode //

const darkModeButton = document.getElementById("dark-mode");

const darkModeOn = () => {
document.body.classList.add("darkMode");
};

const darkModeOff = () => {
document.body.classList.remove("darkMode");
};

darkModeButton.addEventListener("click", () => {
if (document.body.classList.contains("darkMode")) {
darkModeOff();
} else {
darkModeOn();
}
});
```

## How to run locally

- Clone the repo
- npm install
- npm run dev

## How to deploy

- npm run build
