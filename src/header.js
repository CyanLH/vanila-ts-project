"use strict";
const titleEvtListener = () => {
    const currentTheme = document.documentElement.getAttribute('color-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('color-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('color-theme', 'dark');
    }
};
const headerInit = () => {
    const [bodyEl] = document.getElementsByTagName('body');
    const headerEl = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'Vanilla TS Project';
    title.addEventListener('click', titleEvtListener);
    headerEl.appendChild(title);
    if (bodyEl instanceof HTMLBodyElement) {
        bodyEl.appendChild(headerEl);
    }
};
headerInit();
