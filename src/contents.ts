const skillInit: (name: string, extension: string, description: string) => HTMLImageElement = (
  name: string,
  extension: string,
  description: string,
) => {
  const logo = document.createElement('img');
  logo.alt = name;
  logo.src = `static/${name}.${extension}`;
  logo.classList.add('skill-logo');

  return logo;
};

const contentsInit = () => {
  const [mainEl] = document.getElementsByTagName('main');
  const skillsContainer = document.createElement('div');
  skillsContainer.classList.add('skills-container');

  const skillsTItle = document.createElement('h2');
  skillsTItle.innerHTML = '<code>SKILLS</code>';
  skillsContainer.appendChild(skillsTItle);

  const skillsLogosEle = document.createElement('div');

  const logoImgList: Array<String> = [
    'react.svg',
    'js.svg',
    'ts.svg',
    'nextjs.svg',
    'redux.svg',
    'sass.svg',
    'html5.svg',
    'css3.svg',
  ];

  logoImgList.forEach((logoImg) => {
    const logo = logoImg.split('.');
    const logoEle = skillInit(logo[0], logo[1], '');
    skillsLogosEle.appendChild(logoEle);
  });
  skillsLogosEle.classList.add('sction-skill-logos');
  skillsContainer.appendChild(skillsLogosEle);

  const skillsWrapper = document.createElement('section');
  skillsWrapper.appendChild(skillsContainer);
  skillsWrapper.classList.add('skills-wrapper');

  mainEl.appendChild(skillsWrapper);
};

contentsInit();
