import View from "./view.js";

class ContactsView extends View {
  _message = "";
  _searchErrorMessage =
    "We could not find that record. Please, check the name and try again";
  _landing = document.querySelector(".landing");
  _addressBook = document.querySelector(".address-book");
  _overlay = document.querySelector(".overlay");
  _newContact = document.querySelector(".new-contact");
  _userProfileImg = document.querySelector(".user-profile-img");
  _userProfileImgContainer = document.querySelector(".user-img__container");
  _parentEl = document.querySelector(".profile-container");

  // Call fnxs on page load
  constructor() {
    super();
    this._setElementsVisibility();
  }

  getMarkup() {
    return `
      <div class="user-img__container">
        <img src="${this._data.personalDetails.profileImage}" alt="Profile Image" class="user-profile-img" />
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg" name="dialog" id="dialog"
          />
        <div class="add-contact--icon">
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="10"
                  viewBox="0 0 320 512"
                  class="expand_less hidden"
                >
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
                  <path
                    d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
                  />
                </svg>
        </div>
      </div>
      <div class="name-container">
        <label class="contact-name">${this._data.personalDetails.firstName} ${this._data.personalDetails.lastName}</label>
      </div>
    `;
  }

  // Set elements visiblity via toggle property
  _setElementsVisibility(state) {
    // debugger;

    if (!state) return;

    this._overlay.classList.toggle("hidden");
    this._landing.classList.toggle("hidden");
    this._newContact.classList.add("hidden");
    this._addressBook.classList.toggle("hidden");
    state = false;
  }
}

export default new ContactsView();
