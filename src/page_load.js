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
  content.appendChild(outerDiv);
  content.appendChild(ghostDiv);
};

const menuPage = () => {
  const innerPage = document.createElement('section');
  const columns = document.createElement('div');
  columns.classList.add('columns');
  const column = document.createElement('div');
  column.classList.add('column');
  const card = document.createElement('div');
  card.classList.add('card');
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  const figureImage = document.createElement('figure');
  figureImage.classList.add('image', 'is-3by2');
  const image = document.createElement('img');
  image.setAttribute('src', 'https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg');
  image.setAttribute('alt', 'Placeholder image');
  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');
  const content = document.createElement('div');
  content.classList.add('content');
  content.innerText = 'Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.';
  const cardFooter = document.createElement('footer');
  cardFooter.classList.add('card-footer');
  const cardFooteritem1 = document.createElement('a');
  const cardFooteritem2 = document.createElement('a');
  const cardFooteritem3 = document.createElement('a');
  cardFooteritem1.setAttribute('href', '#');
  cardFooteritem1.textContent = 'Save';
  cardFooteritem2.setAttribute('href', '#');
  cardFooteritem2.textContent = 'Add';
  cardFooteritem3.setAttribute('href', '#');
  cardFooteritem3.setAttribute = 'Order';
  innerPage.appendChild(columns);
  columns.appendChild(column);
  column.appendChild(card);
  card.appendChild(cardImage);
  cardImage.appendChild(figureImage);
  figureImage.appendChild(image);
  column.appendChild(cardContent);
  cardContent.appendChild(content);
  column.appendChild(cardFooter);
  cardFooter.appendChild(cardFooteritem1);
  cardFooter.appendChild(cardFooteritem2);
  cardFooter.appendChild(cardFooteritem3);
  // innerPage.innerHTML = `<div class="columns">
  // <div class="column">
  //   <div class="card">
  //     <div class="card-image">
  //       <figure class="image is-3by2">
  //         <img
  //           src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg"
  //           alt="Placeholder image"
  //         />
  //       </figure>
  //     </div>
  //     <div class="card-content">
  //       <div class="content">
  //         Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
  //         Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
  //         penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  //         Cras mattis consectetur purus sit amet fermentum.
  //       </div>
  //     </div>
  //     <footer class="card-footer">
  //       <a href="#" class="card-footer-item">Save</a>
  //       <a href="#" class="card-footer-item">Add</a>
  //       <a href="#" class="card-footer-item">Order</a>
  //     </footer>
  //   </div>
  // </div>
  // <div class="column">
  //   <div class="card">
  //     <div class="card-image">
  //       <figure class="image is-3by2">
  //         <img
  //           src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg"
  //           alt="Placeholder image"
  //         />
  //       </figure>
  //     </div>
  //     <div class="card-content">
  //       <div class="content">
  //         Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
  //         Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
  //         penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  //         Cras mattis consectetur purus sit amet fermentum.
  //       </div>
  //     </div>
  //     <footer class="card-footer">
  //       <a href="#" class="card-footer-item">Save</a>
  //       <a href="#" class="card-footer-item">Add</a>
  //       <a href="#" class="card-footer-item">Order</a>
  //     </footer>
  //   </div>
  // </div>
  // <div class="column">
  //   <div class="card">
  //     <div class="card-image">
  //       <figure class="image is-3by2">
  //         <img
  //           src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg"
  //           alt="Placeholder image"
  //         />
  //       </figure>
  //     </div>
  //     <div class="card-content">
  //       <div class="content">
  //         Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
  //         Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
  //         penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  //         Cras mattis consectetur purus sit amet fermentum.
  //       </div>
  //     </div>
  //     <footer class="card-footer">
  //       <a href="#" class="card-footer-item">Save</a>
  //       <a href="#" class="card-footer-item">Add</a>
  //       <a href="#" class="card-footer-item">Order</a>
  //     </footer>
  //   </div>
  // </div>
  // <div class="column">
  //   <div class="card">
  //     <div class="card-image">
  //       <figure class="image is-3by2">
  //         <img
  //           src="https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg"
  //           alt="Placeholder image"
  //         />
  //       </figure>
  //     </div>
  //     <div class="card-content">
  //       <div class="content">
  //         Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
  //         Donec id elit non mi porta gravida at eget metus. Cum sociis natoque
  //         penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  //         Cras mattis consectetur purus sit amet fermentum.
  //       </div>
  //     </div>
  //     <footer class="card-footer">
  //       <a href="#" class="card-footer-item">Save</a>
  //       <a href="#" class="card-footer-item">Add</a>
  //       <a href="#" class="card-footer-item">Order</a>
  //     </footer>`;
  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(innerPage);
};

const homeInfo = () => {
  const pageInformation = document.createElement('section');

  pageInformation.innerHTML = `<div class= "">
  <h1 class="title">Welcome to Delicious licks</h1>
  <h2 class="subtitle">We serve you dishes to die for. Come on place your order.
   We are here to serve you<h2>
   <div class="columns">
   <div class="column">
   <figure class="image is-4by3">
  <img class="main-image" src="https://image.freepik.com/free-photo/board-amidst-cooking-ingredients_23-2147749529.jpg">
</figure>
</div>
</div>
  </div>`;
  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(pageInformation);
};

const contactPage = () => {
  const contactInfo = document.createElement('section');
  contactInfo.innerHTML = `<div><h2 class='subtitle is-center'> Contact us</h2><form class="box">
  <div class="field">
    <div class="control">
      <input class="input" type="email" placeholder="e.g. alex@example.com" />
    </div>
  </div>

  <div class="field">
    <div class="control">
      <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
    </div>
  </div>

  <button class="button is-light">Send Message</button>
</form></div>`;
  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(contactInfo);
};

export {
  pageLoad, menuPage, homeInfo, contactPage,
};
