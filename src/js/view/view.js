import contactsView from "./contactsView.js";
import { dialogBox, profileImg } from "../config.js";

export default class View {
  _data;

  // Get upload image URL
  imgPath() {
    dialogBox.click();
    dialogBox.onchange = function () {
      profileImg.src = URL.createObjectURL(dialogBox.files[0]);
    };
  }
  // Display contacts list
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._setElementsVisibility(false);

    // Convert the object to an array and slice the first index out; index 0 has no value
    this._data = Object.entries(data)[0].slice(1);

    const markup = this._getMarkup();
    // Clear the parent element of any content
    this._clear();

    this._parentEl.insertAdjacentHTML("afterbegin", markup);

    this._setElementsVisibility(true);
  }
  // Render Success Message
  renderMessage(message = this._message) {
    alert(message);
    // const markup = `
    //   <div class="message">
    //         <div>
    //           <svg>
    //             <use href="${icons}#icon-smile"></use>
    //           </svg>
    //         </div>
    //         <p>${message}</p>
    //       </div>
    // `;

    // // Clear any existing content in element
    // this._clear();

    // // Render recipe in element
    // this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  // Render Error Message
  renderError(message = this._errorMessage) {
    alert(message);
    // const markup = `
    //   <div class="error">
    //         <div>
    //           <svg>
    //             <use href="${icons}#icon-alert-triangle"></use>
    //           </svg>
    //         </div>
    //         <p>${message}</p>
    //       </div>
    // `;
    // // Clear any existing content in element
    // this._clear();
    // // Render recipe in element
    // this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
  // Private method(): Clear parent element content
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
