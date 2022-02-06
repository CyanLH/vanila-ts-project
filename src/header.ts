const titleEvtListener = (evt: any) => {
  if (evt.target.checked) {
    document.documentElement.setAttribute('color-theme', 'dark');
  } else {
    document.documentElement.setAttribute('color-theme', 'light');
  }
};

const addToggleSwitch = (parent: Node) => {
  const inputEl = document.createElement('input');
  const labelEl = document.createElement('label');

  inputEl.setAttribute('type', 'checkbox');
  inputEl.id = 'switch';

  labelEl.setAttribute('for', 'switch');
  labelEl.innerHTML = 'Toggle';

  parent.appendChild(inputEl);
  parent.appendChild(labelEl);
  inputEl.addEventListener('change', titleEvtListener);
};

const headerInit = () => {
  const [bodyEl] = document.getElementsByTagName('body');
  const headerEl: HTMLHeadElement = document.createElement('header');
  const title: HTMLHeadingElement = document.createElement('h1');
  title.innerText = 'CyanLH';
  // title.addEventListener('click', titleEvtListener);
  headerEl.appendChild(title);

  addToggleSwitch(headerEl);

  if (bodyEl instanceof HTMLBodyElement) {
    bodyEl.appendChild(headerEl);
  }
};

headerInit();
