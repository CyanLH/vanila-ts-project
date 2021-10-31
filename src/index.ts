const [bodyEl] = document.getElementsByTagName('body');

const headerInit = () => {
  const headerEl = document.createElement('header');
  const title = document.createElement('h1');
  title.innerText = 'Vanilla TS Project';
  headerEl.appendChild(title);

  if (bodyEl instanceof HTMLBodyElement) {
    bodyEl.appendChild(headerEl);
  }
};

const mainInit = () => {
  const mainContainer = document.createElement('main');
  const pEle = document.createElement('p');

  const codeEl = document.createElement('code');
  codeEl.addEventListener('click', (evt: MouseEvent) => {
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

  mainContainer.appendChild(codeWrap);
  mainContainer.appendChild(preWrap);

  if (bodyEl instanceof HTMLBodyElement) {
    bodyEl.append(mainContainer);
  }
};

const footerInit = () => {
  const footerEl = document.createElement('footer');
  footerEl.innerHTML = 'footer';
  bodyEl.appendChild(footerEl);
};

const init = () => {
  headerInit();
  mainInit();
  footerInit();
};
init();

/*
 https://www.dell.com/ko-kr/shop/dell-%EB%85%B8%ED%8A%B8%EB%B6%81/sf/xps-laptops#story-tellings-2
 https://2021.feconf.kr/
 참조해서 만들어보자
*/
