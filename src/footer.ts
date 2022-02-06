const logoInit = (parent: Node) => {
  const logoEle = document.createElement('div');

  const githubEle = document.createElement('a');
  githubEle.target = '_blank';
  githubEle.href = 'https://github.com/CyanLH';

  const githubLogo = document.createElement('img');
  githubLogo.src = 'static/github.png';
  githubLogo.classList.add('logo-img');
  githubLogo.alt = 'github';
  githubEle.appendChild(githubLogo);

  const blogEle = document.createElement('a');
  blogEle.target = '_blank';
  blogEle.href = 'https://CyanLH.github.io';

  const blogLogo = document.createElement('img');
  blogLogo.src = 'static/profile.png';
  blogLogo.classList.add('logo-img');
  blogLogo.alt = 'CyanLH blog';
  blogEle.appendChild(blogLogo);

  logoEle.appendChild(githubEle);
  logoEle.appendChild(blogEle);

  parent.appendChild(logoEle);
};

const infoInit = (parent: Node) => {
  const infoEle = document.createElement('div');
  infoEle.innerHTML = '이한 | dlgksk5@gmail.com';
  parent.appendChild(infoEle);
};

const licenseInit = (parent: Node) => {
  const licenseEle = document.createElement('div');
  licenseEle.innerHTML = '© CyanLH';
  parent.appendChild(licenseEle);
};

const footerInit = () => {
  const [bodyEl] = document.getElementsByTagName('body');
  const footerEl = document.createElement('footer');
  const footerContainer = document.createElement('div');
  footerContainer.classList.add('footer-container');
  logoInit(footerContainer);
  infoInit(footerContainer);
  licenseInit(footerContainer);
  footerEl.appendChild(footerContainer);

  if (bodyEl instanceof HTMLBodyElement) {
    bodyEl.appendChild(footerEl);
  }
};

footerInit();
