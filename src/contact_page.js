/* eslint-disable import/prefer-default-export */
const ghostDiv = document.createElement('div');
ghostDiv.classList.add('container');

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
export { contactPage };