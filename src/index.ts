const init = () => {
  const div = document.getElementById('d');
  if (div) {
    div.addEventListener('click', (evt) => {
      window.location.href = 'pages/snake.html';
    });
  }
};
init();
