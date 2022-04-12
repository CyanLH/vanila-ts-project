export default class Footer {
  private parent: HTMLBodyElement;
  private footer: HTMLElement;
  private container: HTMLDivElement;

  constructor(parent: HTMLBodyElement) {
    this.parent = parent;
    this.footer = document.createElement('footer');
    this.container = document.createElement('div');
  }

  private logoInit = () => {
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

    this.container.appendChild(logoEle);
  };

  private infoInit = () => {
    const infoEle = document.createElement('div');
    infoEle.innerHTML = '이한 | dlgksk5@gmail.com';
    this.container.appendChild(infoEle);
  };

  private licenseInit = () => {
    const licenseEle = document.createElement('div');
    licenseEle.innerHTML = '© CyanLH';
    this.container.appendChild(licenseEle);
  };

  footerInit = () => {
    this.container.classList.add('footer-container');
    this.logoInit();
    // this.infoInit();
    this.licenseInit();
    this.footer.appendChild(this.container);

    if (this.parent instanceof HTMLBodyElement) {
      this.parent.appendChild(this.footer);
    }
  };
}
