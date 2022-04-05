export default class Header {
  private parent: HTMLBodyElement;
  private headerContainer: HTMLHeadElement;
  private title: HTMLHeadingElement;
  constructor(parent: HTMLBodyElement) {
    this.parent = parent;
    this.headerContainer = document.createElement('header');
    this.title = document.createElement('h1');
  }

  private titleEvtListener: (evt: any) => void = (evt) => {
    if (evt.target.checked) {
      document.documentElement.setAttribute('color-theme', 'dark');
    } else {
      document.documentElement.setAttribute('color-theme', 'light');
    }
  };

  private addToggleSwitch: (parent: Node) => void = (parent) => {
    const inputEl: HTMLInputElement = document.createElement('input');
    const labelEl: HTMLLabelElement = document.createElement('label');

    inputEl.setAttribute('type', 'checkbox');
    inputEl.setAttribute('checked', 'true');
    inputEl.id = 'switch';

    labelEl.setAttribute('for', 'switch');
    labelEl.innerHTML = 'Toggle';

    parent.appendChild(inputEl);
    parent.appendChild(labelEl);
    inputEl.addEventListener('change', this.titleEvtListener);
  };

  private addMenuList: (parent: Node) => void = (parent: Node) => {
    const menu: HTMLUListElement = document.createElement('ul');
    menu.classList.add('header-menu-wrap');
    menu.addEventListener('click', (evt: MouseEvent) => {
      const { value } = <HTMLLIElement>evt.target;
      window.scroll({ left: 0, top: value * window.innerHeight, behavior: 'smooth' });
    });

    ['Home', 'About', 'Skills', 'Contact'].forEach((item, index) => {
      const menuItem: HTMLLIElement = document.createElement('li');
      menuItem.innerText = item;
      menuItem.value = index;
      menu.appendChild(menuItem);
    });

    parent.appendChild(menu);
  };

  headerInit: () => void = () => {
    this.title.innerText = 'CyanLH';
    this.headerContainer.appendChild(this.title);

    const headerButtonWrap: HTMLDivElement = document.createElement('div');
    headerButtonWrap.classList.add('haeder-items-wrap');

    // const menu: HTMLUListElement = document.createElement('ul');
    // menu.innerText = 'Home | About | Skills | Contact';
    // headerButtonWrap.appendChild(menu);

    this.addMenuList(headerButtonWrap);
    this.addToggleSwitch(headerButtonWrap);

    this.headerContainer.appendChild(headerButtonWrap);

    if (this.parent instanceof HTMLBodyElement) {
      this.parent.appendChild(this.headerContainer);
    }
  };
}
