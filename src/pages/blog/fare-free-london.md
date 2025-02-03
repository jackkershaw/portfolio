---
layout: "../../layouts/PostLayout.astro"
title: "Project Overview: Fare Free London"
pubDate: 2024-6-2
description: "Description Of Work On The Fare Free London Website"
tags: ["Projects"]
slug: "fare-free-london"
---

Creating a compelling, functional website for the Fare Free London Campaign involved meticulous planning, thoughtful design, and a rigorous development process. Here's a behind-the-scenes look at how it all came together.

## Planning

1. Gathering Inspiration: Collected ideas from various sources and curated a collection on Are.na.
2. Designing in Figma: Created a moodboard and sketched desktop and mobile designs, selected fonts
3. Technology Choice: Decided on using Next.js with a WordPress backend and WPGraphQL for API integration, inspired by the [Vital Signs](https://www.vitalsignsmag.org/) website I made.

## Building the Website

### Customisation

- Typography: Used P22 Underground for headings and body text.
- Responsive Header: Enhanced mobile usability by creating a full-screen opening experience.
- Favicon Design: Used a vector from [Public Domain Vectors](https://publicdomainvectors.org) and generated a favicon with [RealFaviconGenerator](https://realfavicongenerator.net/).
- Color Scheme: Personalised colours to align with the campaign.
- WordPress Integration: Set up a WordPress admin panel at admin.farefreelondon.org to enable dynamic content updates.

### Polishing the Look

- Added a colorful "tubelines" SVG at the footer to make the site more vibrant.
- Introduced a "Back to Top" button and a "Get Involved" button in the footer for seamless navigation and engagement with users.
- Created a sign-up form, adapting an existing solution from my Right to the City project.

### Optimizing for Performance

- Switched to `next/image` for optimised images.
- Reduced page load time by lazy-loading components, preloading key resources, and adding caching rules in `next.config.js`.
- Performance improved dramatically, with Lighthouse scores jumping from 67 to 96!

## Debugging Challenges

### Mobile Navigation Issues

The mobile menu wouldn’t close when clicking links to the current page. Adding an `onClick` event handler resolved this.

### Improving Load Times

Addressed slow loading times by:

- Installing the `sharp` package for image optimization.
- Lazy-loading non-critical components.
- Preconnecting resources to reduce LCP (Largest Contentful Paint) from 11.3s to 2.8s.

### SEO Enhancements

- Added meta tags and canonical links.
- Improved accessibility by underlining links for clarity and including alt text for all images.
- Submitted the site to Google Search Console for SEO tracking.

### Dynamic Features

- Real-Time Updates: Integrated Vercel deploy hooks with WordPress via WP Webhooks, ensuring immediate site updates when content changes.
- Custom Buttons and Links: Styled the Get Involved page for better engagement and usability.
- Analytics: Installed Umami for privacy-friendly analytics and created a [shareable analytics dashboard](https://umami.jackkershaw.pp.ua/share/gZdZpgRGd3ke7H3Q/farefreelondon.org).

## Final Touches

- Improved accessibility: Ensured links had descriptive titles and made design choices friendly for low-vision users.
- Debugged visual inconsistencies: Fixed button shapes and optimized layout for both desktop and mobile views.
- Added lazy-motion animations for a dynamic feel without sacrificing performance.

## Conclusion

The result is a fast, responsive, and user-friendly website that communicates the goals of the Fare-Free London Campaign while allowing seamless content updates through WordPress. Check out the live site at [farefreelondon.org](https://farefreelondon.org) and the Github repository [here](https://github.com/jackkershaw/fare-free-london).
