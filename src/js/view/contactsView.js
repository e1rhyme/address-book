import View from "./view.js";
// import { contactsEl } from "../config.js";

class ContactsView extends View {
  _message = "No records found!";
  _searchErrorMessage =
    "We could not find that record. Please, check the name and try again";
  _data;
  _overlay = document.querySelector(".overlay");
  _landing = document.querySelector(".landing");
  _newContact = document.querySelector(".new-contact");
  _addressBook = document.querySelector(".address-book");
  _parentEl = document.querySelector(".contacts");

  // Call fnxs on page load
  constructor() {
    super();
    this._setElementsVisibility();
  }

  // Set markup for display of contacts
  _getMarkup() {
    return this._data
      .map((rec, i) => this._generateMarkupPreview(rec, i))
      .join("");
  }
  _generateMarkupPreview(rec, i) {
    return `
        <tr>
          <td colspan="1">${i + 1}.</td>
          <td colspan="2">
            <input type="checkbox" class="hidden" />
            <a href="#">
            <div class="contact-name">
              <img src="${rec.profileImage}"/>
              <p>${rec.firstName} ${rec.lastName}</p>
            </div>
            </a>
          </td>
          <td colspan="1">${rec.mobileNumber}</td>
          <td colspan="1">${rec.emailAddress}</td>
        </tr>
      `;
  }

  // Set elements visiblity via toggle property
  _setElementsVisibility(state) {
    if (!state) return this._message;

    this._overlay.classList.toggle("hidden");
    this._landing.classList.toggle("hidden");
    this._addressBook.classList.toggle("hidden");
    state = false;
  }
}

export default new ContactsView();
