import contactsView from "./contactsView.js";

export default class View {
  _data;
  #markup;
  _dialogBox = document.querySelector(".dialog");

  // Get upload image URL
  imgPath() {
    this._dialogBox.click();
    this._dialogBox.onchange = function () {
      this._profileImg.src = URL.createObjectURL(this._dialogBox.files[0]);
    };
  }

  loadContacts(data) {
    // debugger;

    // If false, visibility state is retained
    if (!data) contactsView._setElementsVisibility(false);
    // Generate markup and set elements visibility
    else {
      this._data = data;
      this.#markup = this.getMarkup();

      // data.map((contact) => {
      //   const rec = this.getMarkup();
      //   rec.join(",");
      //   this.#markup = rec;
      // });

      contactsView._parentEl.insertAdjacentHTML("afterbegin", this.#markup);

      contactsView._setElementsVisibility(true);
    }
  }
  // Display contacts list
  render(data) {
    // debugger;
    console.log(data);

    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    console.log(this._data);

    const markup = this.getMarkup();
    console.log(markup);

    this._parentEl.insertAdjacentHTML("afterbegin", markup);

    contactsView._setElementsVisibility(true);
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

// addEmail.addEventListener("click", function () {
// document.createRange().createContextualFragment(markup)

//   const markup = `
//   <div class="email">
//     <span class="align-input"></span>
//       <input
//         type="email"
//         placeholder="Email Address"
//         value="abc@xyz.com"
//         required
//       />
//       <span class="material-symbols-outlined"> remove </span>
//   </div>
//   `;
//   emailContainer.insertAdjacentHTML("afterend", markup);
// });

// addMobile.addEventListener("click", function () {
//   const markup = `
//       <div class="mobile">
//         <span class="material-symbols-outlined mobile-icon"> call </span>
//         <input
//           type="tel"
//             id="country-code"
//             name="country-code"
//             value="234"
//             required
//         />
//         <input
//           type="tel"
//           id="mobile-number"
//           placeholder="Mobile Number"
//           value="8009876543"
//           required
//         />
//         <span class="material-symbols-outlined add-mobile"> add </span>
//       </div>
//   `;
//   mobileContainer.insertAdjacentHTML("afterend", markup);
// });
