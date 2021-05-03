/* eslint-disable import/prefer-default-export */
const ghostDiv = document.createElement('div');
ghostDiv.classList.add('container');

export const homeInfo = () => {
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
  ghostDiv.appendChild(pageInformation);
};