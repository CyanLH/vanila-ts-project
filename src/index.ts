const init = () => {
  const div = document.getElementById('d');
  if (div) {
    div.addEventListener('click', (evt) => {
      window.location.href = 'pages/snake.html';
    });
  }
};
init();

/*
 https://www.dell.com/ko-kr/shop/dell-%EB%85%B8%ED%8A%B8%EB%B6%81/sf/xps-laptops#story-tellings-2
 참조해서 만들어보자
*/
