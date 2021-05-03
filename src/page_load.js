const content = document.getElementById("content");
const ghostDiv = document.createElement("div");
ghostDiv.classList.add("container");
const pageLoad = () => {
  const outerDiv = document.createElement("div");
  outerDiv.classList.add(
    "tabs",
    "is-toggle",
    "is-flex",
    "is-justify-content-space-between",
    "is-align-items-center"
  );

  outerDiv.innerHTML = `
  <div class="is-toggle">
    <ul>
      <li><a id="home">Home</a></li>
    </ul>
  </div>
  <div class="is-toggle is-toggle-rounded is-right">
    <ul>
      <li>
        <a id="menu">
          <span class="icon is-small"><i class="fas fa-image"></i></span>
          <span>Menu</span>
        </a>
      </li>
      <li>
        <a id="contact">
          <span class="icon is-small"><i class="fas fa-music"></i></span>
          <span>Contact</span>
        </a>
      </li>
      
    </ul>
  </div>
  `;
  content.appendChild(outerDiv);
  content.appendChild(ghostDiv);
};

const menuPage = () => {
  const innerPage = document.createElement("section");
  innerPage.innerHTML = `<div class="columns">
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img
            src="https://bulma.io/images/placeholders/480x320.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img
            src="https://bulma.io/images/placeholders/480x320.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img
            src="https://bulma.io/images/placeholders/480x320.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
  <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img
            src="https://bulma.io/images/placeholders/480x320.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
          Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Cras mattis consectetur purus sit amet fermentum.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Save</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>`;
  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(innerPage);
};

const homeInfo = () => {
  const pageInformation = document.createElement("section");

  pageInformation.innerHTML = `<div class= "section is-medium">
  <h1 class="title">Welcome to Delicious licks</h1>
  <h2 class="subtitle">We serve you dishes to die for. Come on place your order.
   We are here to serve you<h2>
   <div class="columns">
   <div class="column">
   <figure class="image is-4by3">
  <img src="https://bulma.io/images/placeholders/256x256.png">
</figure>
</div>
</div>
  </section>`;
  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(pageInformation);
};

const contactPage = () => {
  const contactInfo = document.createElement("section");
  contactInfo.innerHTML = `<div><h2 class='subtitle is-center'> Contact us</h2></div>`;
  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(contactInfo);
};

export { pageLoad, menuPage, homeInfo, contactPage };
