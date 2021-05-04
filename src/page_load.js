/* eslint-disable import/prefer-default-export */
const content = document.getElementById("content");
const ghostDiv = document.createElement("div");
ghostDiv.classList.add("container");

const pageLoad = () => {
  const addElement = (elem) => {
    document.createElement(elem);
  };
  const outerDiv = addElement("div");
  outerDiv.classList.add(
    "tabs",
    "is-toggle",
    "is-flex",
    "is-justify-content-space-between",
    "is-align-items-center"
  );
  const isToggle = addElement("div");
  const list = addElement("ul");
  const listItem1 = addElement("li");
  const homeLink = addElement("a");
  const icon1 = addElement("span");
  const fasHome = addElement("i");
  const homeSpan = addElement("span");
  const isToggleRounded = addElement("div");
  const list2 = addElement("ul");
  const list2Item1 = addElement("li");
  const menuLink = addElement("a");
  const icon2 = addElement("span");
  const fasMenu = addElement("i");
  const menuSpan = addElement("span");
  const list2Item2 = addElement("li");
  const contactLink = addElement("a");
  const icon3 = addElement("span");
  const fasContact = addElement("i");
  const contactSpan = addElement("span");
  isToggle.classList.add("is-toggle");
  homeLink.id = "home";
  icon1.classList.add("icon", "is-small");
  fasHome.classList.add("fas", "fa-home");
  homeSpan.textContent = "Home";
  isToggleRounded.classList.add("is-toggle", "is-toggle-rounded", "is-right");
  menuLink.id = "menu";
  icon2.classList.add("icon", "is-small");
  fasMenu.classList.add("fas", "fa-pizza-slice");
  menuSpan.textContent = "Menu";
  contactLink.id = "contact";
  icon3.classList.add("icon", "is-small");
  fasContact.classList.add("fas", "fa-address-card");
  contactSpan.textContent = "Contact";
  outerDiv.innerHTML = `
  <div class="is-toggle">
    <ul>
      <li>
        <a id="home">
          <span class="icon is-small">
            <i class="fas fa-home"></i>
          </span>
          <span>Home</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="is-toggle is-toggle-rounded is-right">
    <ul>
      <li>
        <a id="menu">
          <span class="icon is-small"><i class="fas fa-pizza-slice"></i></span>
          <span>Menu</span>
        </a>
      </li>
      <li>
        <a id="contact">
          <span class="icon is-small"><i class="fas fa-address-card"></i></span>
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </div>
  `;
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
