import View from "./view.js";

class ContactsView extends View {
  _overlay = document.querySelector(".overlay");
  _landing = document.querySelector(".landing");
  _addressBook = document.querySelector(".address-book");
  _parentEl = document.querySelector(".contacts");
  _menu = document.querySelector(".menu");
  _sidebar = document.querySelector(".side-bar-container");
  _contactsContainer = document.querySelector(".contacts-container");

  // Call fnxs on page load
  constructor() {
    super();
    this._menuVisibility(true);
    this._setElementsVisibility();
  }

  // Set markup for display of contacts
  _getMarkup() {
    return this._data
      .map((rec, i) => this._generateMarkupPreview(rec, i, this._contactId))
      .join("");
  }

  _generateMarkupPreview(rec, i, contactId) {
    return `
        <tr id="${contactId[i]}">
          <td colspan="1">${i + 1}.</td>
          <td colspan="2">
            <input type="checkbox" class="hidden" />
            <a href="#">
            <div class="contact-name" >
              <img src="${rec[0].profileImage}"/>
              <p>${rec[0].firstName} ${rec[0].lastName}</p>
            </div>
            </a>
          </td>
          <td colspan="1">${rec[0].phoneNumber}</td>
          <td colspan="1">${rec[0].emailAddress}</td>
        </tr>
      `;
  }
  // Show or hide sidebar
  _menuVisibility(state) {
    this._menu.addEventListener("click", () => {
      if (state) {
        this._sidebar.classList.toggle("hidden");
        this._contactsContainer.style.gridColumn = "span 2";
        state = false;
      } else {
        this._sidebar.classList.toggle("hidden");
        this._contactsContainer.style.gridColumn = "span 1";

        state = true;
      }
    });
  }
  // Set elements visiblity via toggle property
  _setElementsVisibility(condition, status) {
    // Element visibility request from load contacts
    if (status === "load") this._setElVisibilityOnLoad(condition);
    // Element visibility request from create contact
    else if (status === "create") this._setElVisibilityOnCreateContact();
  }
  // Set element visibility for contact load request
  _setElVisibilityOnLoad(condition) {
    // No contact exists
    if (!condition) {
      this._landing.classList.remove("hidden");
      this._addressBook.classList.add("hidden");
    } // Contacts exist
    else if (condition) {
      this._landing.classList.add("hidden");
      this._addressBook.classList.remove("hidden");
    }
  }
  // Set element visiblity for create contact request
  _setElVisibilityOnCreateContact() {
    this._landing.classList.add("hidden");
    this._addressBook.classList.remove("hidden");
  }
}

export default new ContactsView();
