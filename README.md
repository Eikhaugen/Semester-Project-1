# Semester-Project-1
This was the semester project for the first semester of Frontend Development, at Noroff School of Technology and Digital Media.
The project is deployed on netlify [here](https://main--splendorous-unicorn-f120c1.netlify.app)

## Table of contents:
- [About](#about)
  - [Requirements](#requirements)
- [Features](#features)
- [Technical Specification](#technical-specification)
- [Process:](#process)
  - [Design Process](#design-process)
  - [Production Process](#production-process)
- [Reflection](#reflection)  

## About

This was the semester project for the first semester of Frontend Development, at Noroff School of Technology and Digital Media.
The project revolves around the creation of a website for a new interactive science museum tailored to the primary and middle school demographic, and families with young children.

### Requirements

The requirements for the semester project was as follows:

- The site must have a design that appeals to the target audience.
- The site must have at least 4-6 pages.
- Compositional principles, typography, and color schemes must be considered.
- Your HTML should be semantic and neatly indented.
- The site should use external CSS style sheets which follow the DRY principle.
- The site should download quickly, and not be overly "heavy". Images should not be over 200kb.
- The site should take WCAG principles into consideration, especially regarding hierarchy, navigation, and color usage.
- The site should be responsive, attractive, and easy to use on a variety of devices.
- The site should show consideration for content strategy and SEO (consider your use of meta tags and alt text).
- The GitHub repo for the project should be set to public.

## Technical Specification

### Tech:
- HTML
- CSS
- Javascript
- [Leaflet.js](https://leafletjs.com) / [OSM-Generator](https://www.osm-generator.com)

### Tools used:
- Figma
- Webstorm
- Sourcetree/ Git
- GitHub
- GitHub project board/ Roadmap
- Bing image generator
- ChatGPT 3.5
- FontAwesome

### Deployment:

The site is deployed through Netlify [here](https://main--splendorous-unicorn-f120c1.netlify.app)

## Features

The project features a website with 17 pages. <br>
The design is responsive, and works great on screen sizes from about 300 pixels wide up to a capped width at 1440px wide.
It features a hamburger menu that is present from 900px wide and smaller.
<br>
The front page displays the opening hours today, using javascript it displays correct hours on any given day of the week.
<br>
The visit us page features a map made using leaflet.js / OSM-Generator.
<br>
The pages feature images and descriptions for all articles, exhibitions and event details.
<br>
The school info page features a booking form, and the footer on all pages features a newsletter signup.
The forms work using netlify's form detection, but there is no backend to support booking or newsletters.

The pages featured in this project are as follows:
- Front page
- Visit us
- School info page
- Exhibitions page
  - 6 exhibition detail pages
- Events page
  - 6 event detail pages

## Process

The process of making this began with the Project Methodology Course Assignment, where the goal was to use a planning tool like GitHub Project Boards, Trello, Jira, or other...
To plan a schedule for the Semester Project.
<br>
I decided to use GitHub Project boards and roadmap because GitHub is a tool I already use, and I thought it would be great to manage pull requests, issues and branches all in one place. <br>
I initially planned to spend one week designing, two weeks for coding and one week for documentation, adding additional features or fixes.

### Design-Process
I began by rough sketching some low-fidelity designs on paper, then moved on to Figma to create mid-fidelity designs, designing mobile first and then desktop.
The mobile design in Figma is designed at 360px wide, desktop is 1440px wide.
The high-fidelity design saw many changes and iterations even through the coding process.

### Production-Process
I used GitHub to create branches from issues, using sourcetree I checkout the branches locally on my mac. Then I do some work before committing, pushing and then merging on GitHub, closing the issue automatically before opening a new branch through GitHub.

Using webstorm, I first created all the main html and css-files that I had set out to create, as well as the basic folder structure I would be working with.

I first created the header, mobile first, then with media queries I made the desktop version.
I made a hamburger menu for phones/ tablets using javascript.

Then I made the footer, the design was very simple when I first set out to code. The footer saw major changes throughout the coding process.
I would later add a newsletter signup and social media icons to the footer, and then later add a background image to both the header and footer.

After making the initial header and footer, I began making the five pages I first set out to create.
Starting with the front page and then making the other pages one by one.
When the main pages were finished, I decided to add event and exhibition detail pages.
I decided on using ChatGPT 3.5 for all descriptions in the pages, instead of using Lorem Ipsum or other placeholder text, as I find it can be quite monotonous and lifeless.

Assets were made using Bing image creator, I used Figma to resize the images, exported them as jpg and converted them to webp.
Made sure that all images were under the 200KB limit set by the task requirements.

I deployed the project on Netlify, checked it out on my phone and multiple browsers.
Did changes and bugfixes as needed.

## Reflection

I feel like the task wasn't all that inspiring, and I already struggle with designing.
Still I am quite satisfied with the design on mobile, less so on desktop.
The design I coded, began deviating quite a bit from the design on I had made on Figma, as I felt the initial design didn't work well.
The final design in Figma, and the final coded design are quite dissimilar. This is an area I will have to improve on, making better designs and sticking to them once I start coding.


I am quite content with my code and the pace I maintain while coding.
Overall I think the semester project went well.