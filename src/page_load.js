/* eslint-disable import/prefer-default-export */
const content = document.getElementById('content');
const ghostDiv = document.createElement('div');
ghostDiv.classList.add('container');

const pageLoad = () => {
  const outerDiv = document.createElement('div');
  outerDiv.classList.add(
    'tabs',
    'is-toggle',
    'is-flex',
    'is-justify-content-space-between',
    'is-align-items-center',
  );
  const isToggle = document.createElement('div');
  const list = document.createElement('ul');
  const listItem1 = document.createElement('li');
  const homeLink = document.createElement('a');
  const icon1 = document.createElement('span');
  const fasHome = document.createElement('i');
  const homeSpan = document.createElement('span');
  const isToggleRounded = document.createElement('div');
  const list2 = document.createElement('ul');
  const list2Item1 = document.createElement('li');
  const menuLink = document.createElement('a');
  const icon2 = document.createElement('span');
  const fasMenu = document.createElement('i');
  const menuSpan = document.createElement('span');
  const list2Item2 = document.createElement('li');
  const contactLink = document.createElement('a');
  const icon3 = document.createElement('span');
  const fasContact = document.createElement('i');
  const contactSpan = document.createElement('span');
  isToggle.classList.add('is-toggle');
  homeLink.id = 'home';
  icon1.classList.add('icon', 'is-small');
  fasHome.classList.add('fas', 'fa-home');
  homeSpan.textContent = 'Home';
  isToggleRounded.classList.add('is-toggle', 'is-toggle-rounded', 'is-right');
  menuLink.id = 'menu';
  icon2.classList.add('icon', 'is-small');
  fasMenu.classList.add('fas', 'fa-pizza-slice');
  menuSpan.textContent = 'Menu';
  contactLink.id = 'contact';
  icon3.classList.add('icon', 'is-small');
  fasContact.classList.add('fas', 'fa-address-card');
  contactSpan.textContent = 'Contact';

  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }

  content.appendChild(outerDiv);
  content.appendChild(ghostDiv);
  outerDiv.appendChild(isToggle);
  isToggle.appendChild(list);
  list.appendChild(listItem1);
  listItem1.appendChild(homeLink);
  homeLink.appendChild(icon1);
  icon1.appendChild(fasHome);
  homeLink.appendChild(homeSpan);
  outerDiv.appendChild(isToggleRounded);
  isToggleRounded.appendChild(list2);
  list2.appendChild(list2Item1);
  list2Item1.appendChild(menuLink);
  menuLink.appendChild(icon2);
  icon2.appendChild(fasMenu);
  menuLink.appendChild(menuSpan);
  list2.appendChild(list2Item2);
  list2Item2.appendChild(contactLink);
  contactLink.appendChild(icon3);
  icon3.appendChild(fasContact);
  contactLink.appendChild(contactSpan);
};

export { pageLoad };
