/* eslint-disable import/prefer-default-export */
const ghostDiv = document.createElement("div");
ghostDiv.classList.add("container");

const contactPage = () => {
  const contactInfo = document.createElement("section");
  const mainDiv = document.createElement("div");
  const subtitle = document.createElement("h2");
  const box = document.createElement("form");
  const field = document.createElement("div");
  const control = document.createElement("div");
  const emailInput = document.createElement("input");
  const textMessage = document.createElement("textarea");
  const btnSend = document.createElement("button");
  subtitle.classList.add("subtitle", "is-center");
  subtitle.textContent = "Contact us";
  box.classList.add("box");
  field.classList.add("field");
  control.classList.add("control");
  emailInput.classList.add("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("placeholder", "e.g. alex@example.com");
  textMessage.classList.add("textarea");
  textMessage.setAttribute("placeholder", "e.g. Hello world");
  btnSend.classList.add("button", "is-light");
  btnSend.innerText = "Send Message";

  //   contactInfo.innerHTML = `<div><h2 class='subtitle is-center'> Contact us</h2>
  //   <form class="box">
  //   <div class="field">
  //     <div class="control">
  //       <input class="input" type="email" placeholder="e.g. alex@example.com" />
  //     </div>
  //   </div>

  //   <div class="field">
  //     <div class="control">
  //       <textarea class="textarea" placeholder="e.g. Hello world"></textarea>
  //     </div>
  //   </div>

  //   <button class="button is-light">Send Message</button>
  // </form></div>`;

  if (ghostDiv.childNodes[0]) {
    ghostDiv.removeChild(ghostDiv.childNodes[0]);
  }
  ghostDiv.appendChild(contactInfo);
  contactInfo.appendChild(mainDiv);
  mainDiv.appendChild(subtitle);
  mainDiv.appendChild(box);
  box.appendChild(field);
  field.appendChild(control);
  control.appendChild(emailInput);
  box.appendChild(field);
  field.appendChild(control);
  control.appendChild(textMessage);
  box.appendChild(btnSend);
};
export { contactPage };
