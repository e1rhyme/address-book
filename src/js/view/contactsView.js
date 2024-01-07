import View from "./view.js";
import { contactsEl } from "../config.js";

class ContactsView extends View {
  _message = "";
  _searchErrorMessage =
    "We could not find that record. Please, check the name and try again";

  _landing = document.querySelector(".landing");
  _addressBook = document.querySelector(".address-book");
  _overlay = document.querySelector(".overlay");
  _newContact = document.querySelector(".new-contact");

  // Call fnxs on page load
  constructor() {
    super();
    this._setElementsVisibility();
  }

  _getMarkupContacts() {
    const recs = Object.entries(this._data);

    recs.forEach(function (ent, i, _) {
      const markup = `
        <tr>
          <td colspan="1">${i + 1}.</td>
          <td colspan="2">
            <input type="checkbox" class="hidden" />
            <div class="contact-name">
              <img src="${ent[i + 1].profileImage}"/>
              <p>${ent[i + 1].firstName} ${ent[i + 1].lastName}</p>
            </div>
          </td>
          <td colspan="1">${ent[i + 1].mobileNumber}</td>
          <td colspan="1">${ent[i + 1].emailAddress}</td>
        </tr>`;

      contactsEl.insertAdjacentHTML("afterend", markup);
    });
    this._setElementsVisibility(true);
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
