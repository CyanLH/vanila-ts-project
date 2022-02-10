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
  // mainContainer.appendChild(codeWrap);
  // mainContainer.appendChild(preWrap);

  const test = document.createElement('div');
  test.classList.add('svg-container');
  // <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  //   <g stroke="none" fill="var(--font-color)">
  //     <text font-weight="normal" font-family="flood-std" font-size="7em" y="100" text-anchor="middle">
  //       <tspan>
  //         <tspan>@</tspan>
  //         <tspan>C</tspan>
  //         <tspan>y</tspan>
  //         <tspan>a</tspan>
  //         <tspan>n</tspan>
  //         <tspan>L</tspan>
  //         <tspan>H</tspan>
  //       </tspan>
  //     </text>
  //   </g>
  // </svg>
  test.innerHTML = `
  <svg class="svg-cyanlh" viewBox="0 0 1320 300">
    <text x="50%" y="50%" dy=".35em" text-anchor="middle">@CyanLH</text>
  </svg>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
      <path id="path">
        <animate attributeName="d" from="m0,110 h0" to="m0,110 h1100" dur="6.8s" begin="0s" repeatCount="indefinite"/>
      </path>
      <text font-size="1.55em" font-family="D2Coding" fill="var(--font-color)">
        <textPath xlink:href="#path">
          const myName = 'LeeHan';
        </textPath>
      </text>
    </svg>
  </div>
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
