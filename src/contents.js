"use strict";
const skillInit = (name, extension, description) => {
    const logo = document.createElement('img');
    logo.alt = name;
    logo.src = `static/${name}.${extension}`;
    logo.classList.add('skill-logo');
    return logo;
};
const contentsInit = () => {
    const [mainEl] = document.getElementsByTagName('main');
    const skillsEle = document.createElement('section');
    skillsEle.classList.add('skills-container');
    const skillsTItle = document.createElement('h2');
    skillsTItle.innerHTML = '<code>SKILLS</code>';
    skillsEle.appendChild(skillsTItle);
    const skillsLogosEle = document.createElement('div');
    const logoImgList = [
        'react.svg',
        'js.svg',
        'ts.svg',
        'nextjs.svg',
        'redux.svg',
        'sass.svg',
        'html5.svg',
        'css3.svg',
    ];
    logoImgList.forEach((logoImg) => {
        const logo = logoImg.split('.');
        const logoEle = skillInit(logo[0], logo[1], '');
        skillsLogosEle.appendChild(logoEle);
    });
    skillsLogosEle.classList.add('sction-skill-logos');
    skillsEle.appendChild(skillsLogosEle);
    mainEl.appendChild(skillsEle);
};
contentsInit();
