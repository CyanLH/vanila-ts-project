"use strict";
const [bodyEl] = document.getElementsByTagName('body');
const mainTitleInit = (parent) => {
    const container = document.createElement('div');
    container.classList.add('main-title');
    parent.appendChild(container);
};
const mainInit = () => {
    const mainContainer = document.createElement('main');
    const pEle = document.createElement('p');
    const codeEl = document.createElement('code');
    codeEl.addEventListener('click', (evt) => {
        window.location.href = 'pages/snake';
    });
    codeEl.innerHTML = "const myName = 'Lee Han'";
    const preEl = document.createElement('pre');
    preEl.innerHTML = `const leeHan = {
  stack: 'front end',
  skill: 'react',
  practice: 'typescript',
};`;
    const codeWrap = pEle.cloneNode();
    const preWrap = pEle.cloneNode();
    codeWrap.appendChild(codeEl);
    preWrap.appendChild(preEl);
    mainTitleInit(mainContainer);
    mainContainer.appendChild(codeWrap);
    mainContainer.appendChild(preWrap);
    if (bodyEl instanceof HTMLBodyElement) {
        bodyEl.append(mainContainer);
    }
};
const init = () => {
    mainInit();
};
init();
/*
 https://www.dell.com/ko-kr/shop/dell-%EB%85%B8%ED%8A%B8%EB%B6%81/sf/xps-laptops#story-tellings-2
 https://2021.feconf.kr/
 참조해서 만들어보자
*/
