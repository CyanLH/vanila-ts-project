"use strict";
const logoInit = (parent) => {
    const logoEle = document.createElement('h1');
    logoEle.innerHTML = 'logo | github | blog';
    parent.appendChild(logoEle);
};
const infoInit = (parent) => {
    const infoEle = document.createElement('div');
    infoEle.innerHTML = '이한 | dlgksk5@gmail.com';
    parent.appendChild(infoEle);
};
const licenseInit = (parent) => {
    const licenseEle = document.createElement('div');
    licenseEle.innerHTML = '© CyanLH';
    parent.appendChild(licenseEle);
};
const footerInit = () => {
    const [bodyEl] = document.getElementsByTagName('body');
    const footerEl = document.createElement('footer');
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    logoInit(footerContainer);
    infoInit(footerContainer);
    licenseInit(footerContainer);
    footerEl.appendChild(footerContainer);
    if (bodyEl instanceof HTMLBodyElement) {
        bodyEl.appendChild(footerEl);
    }
};
footerInit();
