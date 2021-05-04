/* eslint-disable import/prefer-default-export */
const ghostDiv = document.createElement('div');
ghostDiv.classList.add('container');

export const homeInfo = () => {
  const addElement = (elem) => {
    document.createElement(elem);
  };
  const pageInformation = addElement('section');
  const mainDiv = addElement('div');
  const title = addElement('h1');
  const subtitle = addElement('h2');
  const columns = addElement('div');
  const column = addElement('div');
  const figureImage = addElement('figure');
  const mainImage = addElement('img');
  mainImage.setAttribute('src', 'https://image.freepik.com/free-photo/board-amidst-cooking-ingredients_23-2147749529.jpg');
  title.classList.add('title');
  subtitle.classList.add('subtitle');
  columns.classList.add('columns');
  column.classList.add('column');
  figureImage.classList.add('image', 'is-4by3');
  mainImage.classList.add('main-image');

//   pageInformation.innerHTML = `<div class= "">
//   <h1 class="title">Welcome to Delicious licks</h1>
//   <h2 class="subtitle">We serve you dishes to die for. Come on place your order.
//    We are here to serve you<h2>
//    <div class="columns">
//    <div class="column">
//    <figure class="image is-4by3">
//   <img class="main-image" src="https://image.freepik.com/free-photo/board-amidst-cooking-ingredients_23-2147749529.jpg">
// </figure>
// </div>
// </div>
//   </div>`;
  ghostDiv.appendChild(pageInformation);
  pageInformation.appendChild(mainDiv);
  mainDiv.appendChild(title);
  mainDiv.appendChild(subtitle);
  mainDiv.appendChild(columns);
  columns.appendChild(column);
  column.appendChild(figureImage);
  figureImage.appendChild(mainImage);
};