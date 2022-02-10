"use strict";
const titleEvtListener = (evt) => {
    if (evt.target.checked) {
        document.documentElement.setAttribute('color-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('color-theme', 'light');
    }
};
const addToggleSwitch = (parent) => {
    const inputEl = document.createElement('input');
    const labelEl = document.createElement('label');
    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('checked', 'true');
    inputEl.id = 'switch';
    labelEl.setAttribute('for', 'switch');
    labelEl.innerHTML = 'Toggle';
    parent.appendChild(inputEl);
    parent.appendChild(labelEl);
    inputEl.addEventListener('change', titleEvtListener);
};
const addMenuList = (parent) => {
    const menu = document.createElement('ul');
    menu.classList.add('header-menu-wrap');
    menu.addEventListener('click', (evt) => {
        const { value } = evt.target;
        window.scroll({ left: 0, top: value * window.innerHeight, behavior: 'smooth' });
    });
    ['Home', 'About', 'Skills', 'Contact'].forEach((item, index) => {
        const menuItem = document.createElement('li');
        menuItem.innerText = item;
        menuItem.value = index;
        menu.appendChild(menuItem);
    });
    parent.appendChild(menu);
};
const headerInit = () => {
    const [bodyEl] = document.getElementsByTagName('body');
    const headerEl = document.createElement('header');
    const title = document.createElement('h1');
    title.innerText = 'CyanLH';
    headerEl.appendChild(title);
    const headerButtonWrap = document.createElement('div');
    headerButtonWrap.classList.add('haeder-items-wrap');
    // const menu: HTMLUListElement = document.createElement('ul');
    // menu.innerText = 'Home | About | Skills | Contact';
    // headerButtonWrap.appendChild(menu);
    addMenuList(headerButtonWrap);
    addToggleSwitch(headerButtonWrap);
    headerEl.appendChild(headerButtonWrap);
    if (bodyEl instanceof HTMLBodyElement) {
        bodyEl.appendChild(headerEl);
    }
};
headerInit();
