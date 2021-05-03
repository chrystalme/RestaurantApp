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

  outerDiv.innerHTML = `
  <div class="is-toggle">
    <ul>
      <li><a id="home"><span class="icon is-small"><i class="fas fa-home"></i></span><span>Home</span></a></li>
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
};

export { pageLoad };
