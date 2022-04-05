import '../style/index.css';
import Header from './header';
import Contents from './contents';
import Footer from './footer';

class Main {
  private parent: HTMLBodyElement;
  public main: HTMLElement;
  constructor(parent: HTMLBodyElement) {
    this.parent = parent;
    this.main = document.createElement('main');
  }

  private mainTitleInit: () => void = () => {
    const container = document.createElement('div');
    container.classList.add('main-title');

    for (let i = 0; i < 20; i += 1) {
      const evenBetter = document.createElement('h1');
      evenBetter.innerHTML = Array(18).fill('Even Better...').join(' ');
      evenBetter.classList.add(`even-better-${i % 2 === 0 ? 'first' : 'second'}`);

      container.appendChild(evenBetter);
    }

    this.main.appendChild(container);
  };

  mainInit: () => void = () => {
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

    this.mainTitleInit();
    // mainContainer.appendChild(codeWrap);
    // mainContainer.appendChild(preWrap);

    const svgContainer = document.createElement('div');
    svgContainer.classList.add('svg-container');
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
    svgContainer.innerHTML = `
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
    this.main.append(svgContainer);

    if (this.parent instanceof HTMLBodyElement) {
      this.parent.append(this.main);
    }
  };

  contentsInit = () => {
    const contents = new Contents(this.main);
    contents.contentsInit();
  };
}

const init = () => {
  const [bodyEl] = document.getElementsByTagName('body');

  const header = new Header(bodyEl);
  header.headerInit();
  const main = new Main(bodyEl);
  main.mainInit();
  main.contentsInit();
  const footer = new Footer(bodyEl);
  footer.footerInit();
  console.log({ main, header, footer });
};

init();

/*
 https://www.dell.com/ko-kr/shop/dell-%EB%85%B8%ED%8A%B8%EB%B6%81/sf/xps-laptops#story-tellings-2
 https://2021.feconf.kr/
 참조해서 만들어보자
*/
