"use strict";
const [bodyEl] = document.getElementsByTagName('body');
const mainTitleInit = (parent) => {
    const container = document.createElement('div');
    container.classList.add('main-title');
    for (let i = 0; i < 20; i += 1) {
        const evenBetter = document.createElement('h1');
        evenBetter.innerHTML = Array(18).fill('Even Better...').join(' ');
        evenBetter.classList.add(`even-better-${i % 2 === 0 ? 'first' : 'second'}`);
        container.appendChild(evenBetter);
    }
    parent.appendChild(container);
};
const mainInit = () => {
    const mainContainer = document.createElement('main');
    const pEle = document.createElement('p');
    pEle.classList.add('home');
    const codeEl = document.createElement('h1');
    codeEl.addEventListener('click', (evt) => {
        window.location.href = 'pages/snake';
    });
    codeEl.innerHTML = "<code>const myName = 'Lee Han'</code>";
    const preEl = document.createElement('pre');
    preEl.innerHTML = `const leeHan = {
  stack: 'front end',
  skill: 'react',
  practice: 'typescript',
};`;
    const codeWrap = pEle.cloneNode();
    // const preWrap = pEle.cloneNode();
    codeWrap.appendChild(codeEl);
    // preWrap.appendChild(preEl);
    mainTitleInit(mainContainer);
    // mainContainer.appendChild(codeWrap);
    // mainContainer.appendChild(preWrap);
    const test = document.createElement('div');
    test.classList.add('test-container');
    test.innerHTML = `
  <svg viewBox="0 0 800 134" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<title>@WebDesignerMag</title>
		<g stroke="none" fill="none" fill-rule="evenodd" fill-opacity="0">
			<text id="@WebDesignerMag" stroke="#aaa" fill="#645F5A" font-weight="normal" font-family="NanumGangInHanWiRo, Permanent Marker" font-size="244">
				<tspan x="3" y="132"><!--
					--><tspan>@</tspan><!--
					--><tspan>C</tspan><!--
					--><tspan>y</tspan><!--
					--><tspan>a</tspan><!--
					--><tspan>n</tspan><!--
					--><tspan>L</tspan><!--
					--><tspan>H</tspan><!--
				--></tspan>
			</text>
		</g>
  </svg>
  `;
    mainContainer.append(test);
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
