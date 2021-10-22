const init = () => {
  const div = document.getElementById('d');
  if (div) {
    div.addEventListener('click', (evt) => {
      window.location.replace('pages/snake.html');
    });
  }
};
init();
