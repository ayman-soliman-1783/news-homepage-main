# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Design Screenshot](/design/Screenshot_12-3-2025_165625_127.0.0.1.jpeg)

##

![Mobile Design Screenshot](/design/mobile-design.jpg)

### Links

- Solution URL: [news-homepage-main](https://www.frontendmentor.io/solutions/css-grid-css-subgrid-event-listeners-transitions-responsive-layout-7shGWdk4CJ)
- Live Site URL: [News Homepage](https://ayman-soliman-1783.github.io/news-homepage-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS Subgrid
- Desktop-first workflow
- JavaScript
- JavaScript Event Listeners
- Transitions
- Responsive Layouts

### What I learned

I learned how to build a responsive hidden burger menu using HTML, CSS, and JavaScript. This involved using hidden elements, CSS positioning, CSS transitions for smooth animations, and JavaScript event listeners to toggle the menu's visibility by adjusting the menu's position on the workflow.

```html
<img id="menu__icon" src="/assets/images/icon-menu.svg" alt="icon-menu" />
```

```css
#menu {
  height: 100vh;
  width: 75vw;
  background: hsl(36, 100%, 99%);
  position: fixed;
  top: 0;
  transition: 0.5s ease-in-out;
  z-index: 2;
}

.hidden {
  right: -100%;
}

.visible {
  right: 0;
}
```

```js
let menuIcon = document.getElementById("menu__icon");
menuIcon.addEventListener("click", () => {
  menu.classList.remove("hidden");
  menu.classList.add("visible");
});

iconMenuClose.addEventListener("click", () => {
  menu.classList.remove("visible");
  menu.classList.add("hidden");
});

```

### Continued development

In future projects, I want to focus on responsively generated components. While I have learned how to create a burger menu, I want to refine my skills in dynamically generating and modifying UI elements based on screen size and user interactions.

Some key areas I plan to improve:

- Dynamic Component Rendering: Creating elements in JavaScript based on user actions or device breakpoints.
- CSS Flexibility: Enhancing my understanding of clamp(), min(), max(), and other modern CSS techniques for better responsiveness.
- Performance Optimization: Ensuring that dynamically generated components do not negatively impact page load speed and user experience.

### Useful resources

- [Kevin Powell's YouTube Channel](https://www.youtube.com/@KevinPowell) - This helped me with subgrid layout. I really liked this pattern and will use it going forward.
- [Ahmed Shadeed's Personal Blog](https://ishadeed.com/) - This is an amazing article which helped me understand everything about layouts in CSS, CSS techniques for better responsiveness using responsive units. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Ayman Soliman](https://bento.me/ayman-soliman)
- Frontend Mentor - [@ayman-soliman-1783](https://www.frontendmentor.io/profile/ayman-soliman-1783)
- Twitter - [@a_soliman1783](https://x.com/a_soliman1783)
