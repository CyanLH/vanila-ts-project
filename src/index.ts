const [bodyEl] = document.getElementsByTagName('body');

const mainTitleInit: (parent: Node) => void = (parent) => {
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

const mainInit: () => void = () => {
  const mainContainer = document.createElement('main');
  const pEle = document.createElement('p');
  pEle.classList.add('home');

  const codeEl = document.createElement('h1');
  codeEl.addEventListener('click', (evt: MouseEvent) => {
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
  mainContainer.appendChild(codeWrap);
  // mainContainer.appendChild(preWrap);

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
