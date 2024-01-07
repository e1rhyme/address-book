import View from "./view.js";

class ContactsView extends View {
  _message = "";
  _searchErrorMessage =
    "We could not find that record. Please, check the name and try again";

  _landing = document.querySelector(".landing");
  _addressBook = document.querySelector(".address-book");
  _overlay = document.querySelector(".overlay");
  _newContact = document.querySelector(".new-contact");
  _parentEl = document.querySelector(".profile-container");
  _markup;

  // Call fnxs on page load
  constructor() {
    super();
    this._setElementsVisibility();
  }

  _getMarkupContacts() {
    // debugger;
    console.log(this._data);
    // return (this._markup = Object.entries(this._data));
    // console.log(this._markup[2][1]);
    // `
    //    `;
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
