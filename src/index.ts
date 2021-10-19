const init = () => {
  const div = document.getElementById('d');
  if (div) {
    div.addEventListener('click', (evt) => {
      console.log('test', evt);
      // window.location.hash.replace()
    });
  }
};
init();
