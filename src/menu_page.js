const innerPage = document.createElement('section');
const columns = document.createElement('div');
columns.classList.add('columns');
for (let index = 1; index < 5; index += 1) {
  const column = document.createElement('div');
  column.classList.add('column');
  const card = document.createElement('div');
  card.classList.add('card');
  const cardImage = document.createElement('div');
  cardImage.classList.add('card-image');
  const figureImage = document.createElement('figure');
  figureImage.classList.add('image', 'is-3by2');
  const image = document.createElement('img');
  image.setAttribute(
    'src',
    'https://www.acouplecooks.com/wp-content/uploads/2019/12/Vegan-Fettucini-Alfredo-005.jpg',
  );
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
  cardFooteritem1.classList.add('card-footer-item');
  cardFooteritem2.setAttribute('href', '#');
  cardFooteritem2.textContent = 'Add';
  cardFooteritem2.classList.add('card-footer-item');
  cardFooteritem3.setAttribute('href', '#');
  cardFooteritem3.textContent = 'Order';
  cardFooteritem3.classList.add('card-footer-item');
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
}

export default innerPage;
