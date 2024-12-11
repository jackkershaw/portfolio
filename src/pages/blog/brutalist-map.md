---
layout: "../../layouts/PostLayout.astro"
title: "Project Overview: London Brutalist Map"
pubDate: 2024-10-22
description: "Description of how i built the London Brutalist Map"
tags: ["Projects"]
slug: "brutalist-map"
---

### Why Did I Build This?

After the success of the HTML version of this site, I decided to rebuild it in a modern framework. The previous implementation heavily relied on JavaScript, making the codebase challenging to navigate. Switching to React offered a cleaner, component-based architecture to simplify development and maintenance.

Here are the primary motivations behind the rebuild:

1. **Improved Codebase Structure**
   React’s component-based design addressed the complexity of the earlier codebase, making it more modular and easier to work with.

2. **Better Mapbox Integration**
   Moving to a React-based project allowed me to use the Mapbox NPM package instead of the CDN method. This change enabled self-hosting the GeoJSON data, which simplified edits and improved flexibility.

3. **Expanding Functionality**
   Hosting the data locally opened the door to creating a multi-page site. This allowed me to present the data in various formats, giving users more ways to engage with the content.

### How I Built It

#### Setting Up the Project

- I initialized the app using **Vite** for its fast build times and modern tooling.
- I styled the pages using **Tailwind CSS**, taking inspiration from my previous Brutalist Map project for the overall aesthetic.

#### Learning APIs

I taught myself how to work with APIs in JavaScript using `fetch()` and then applied this knowledge to React.

- Initially, I focused on fetching data from the Mapbox URL.
- I spent extra time integrating local GeoJSON data for easier edits and references.

#### Integrating the Map

- I used [React-map-gl](https://github.com/visgl/react-map-gl) as an API wrapper for [Mapbox-gl](https://github.com/mapbox/mapbox-gl-js), with map styles sourced from [Mapbox Studio](https://www.mapbox.com/studio/).
- I added map markers using a `map()` function and implemented controls using the [React-map-gl examples](https://github.com/visgl/react-map-gl/blob/7.1-release/examples/controls/src/app.tsx) as a guide.

#### Enhancing Map Interactivity

- **Hover Effects**
  - Initially, I used React-map-gl’s documentation to add hover events, but it didn’t work as expected.
  - I created custom markers and implemented `onMouseEnter` and `onMouseLeave` events with state management to display building details on hover. To resolve flickering issues, I bound these events to the div displaying the hover information.
- **Click Events**
  - Similar to hover, I added click events to markers. I reused HTML and CSS from the site’s index page for the pop-up display.

#### Improving the User Experience

- **Highlighting Visited Locations**
  - I updated the map to display visited buildings in green for better visual tracking.
- **Image Optimization**
  - Images from GeoJSON data links were downloaded using a Python script. Another script compressed these images into `.webp` format under 1MB to improve load times.
- **Mobile Responsiveness**
  - I debugged layout issues across different screen sizes and made necessary adjustments for a smoother mobile experience.
- **Landing Page**
  - A custom landing page with SASS styling was added to enhance usability. Using local storage, this page only displays on the user’s first visit.

#### Refining the Codebase

- **Component Abstraction**
  - I moved `mapControl` and `customMarker` into separate files to improve modularity.
- **CSS and SASS Improvements**
  - Common Tailwind styles were extracted into SCSS files for easier editing.
  - A typography SCSS file was introduced to manage global styles.
  - Color variables were added to SASS for better maintainability.

#### Moving to MapLibre

To make the project more open-source friendly, I transitioned from Mapbox to **MapLibre**.

- I followed guides from [OpenFreeMap](https://openfreemap.org/) to set up the new mapping stack.
- I generated map styles using **Maputnik** and font tiles using [MapLibre Font Maker](https://github.com/maplibre/font-maker).

### Deployment

- The app was deployed to **Netlify**, ensuring quick and reliable hosting.
- React Router was used for seamless navigation between pages, a custom 404 page, and improved page load speeds via `Link` elements.

### Conclusion

This project taught me a great deal about working with APIs, React, and web performance optimisation. The journey was difficult, but each one contributed to a more polished, user-friendly, and maintainable final product.

You can find a live copy of the site at [londonbrutalistmap.co.uk](https://londonbrutalistmap.co.uk) and read more on the Github repository [here](https://github.com/jones58/LondonBrutalistMap). As an open-source project, we are always looking for contributions and suggestions to improve the site further.
