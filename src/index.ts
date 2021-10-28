const init = () => {
  const test = [];
  test.push(1);
  // console.log(test);
  const div = document.getElementById('d');
  if (div) {
    div.addEventListener('click', (evt: MouseEvent) => {
      window.location.href = 'pages/snake';
    });
  }
};
init();

/*
 https://www.dell.com/ko-kr/shop/dell-%EB%85%B8%ED%8A%B8%EB%B6%81/sf/xps-laptops#story-tellings-2
 https://2021.feconf.kr/
 참조해서 만들어보자
*/
