import View from "./view.js";

class ContactsView extends View {
  _overlay = document.querySelector(".overlay");
  _landing = document.querySelector(".landing");
  _addressBook = document.querySelector(".address-book");
  _parentEl = document.querySelector(".contacts");
  _menu = document.querySelector(".menu");
  _sidebar = document.querySelector(".side-bar-container");
  _contactsContainer = document.querySelector(".contacts-container");
  _contactDetails;

  // Call fnxs on page load
  constructor() {
    super();
    this._menuVisibility(true);
    this._setElementsVisibility();
  }

  // Set markup for display of contacts
  _getMarkup() {
    return this._data
      .map((rec, i) => {
        this._generateMarkupPreview(rec, i, this._contactId);
      })
      .join("");
  }
  _generateMarkupPreview(rec, i, contactId) {
    console.log(rec, i, contactId);
    return `
        <tr id="${contactId[i]}">
          <td colspan="1">${i + 1}.</td>
          <td colspan="2">
            <a href="#">
            <div class="contact-name" >
              <img class="contact--profile-img" src="${rec[0].profileImage}"/>
              <p>${rec[0].firstName} ${rec[0].lastName}</p>
            </div>
            </a>
          </td>
          <td colspan="1">${rec[0].phoneNumber}</td>
          <td colspan="1">${rec[0].emailAddress}
           <svg class="icon--edit hidden"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
              >
              <path
                  d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
                />
              </svg>
              <svg class="icon--delete hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </td>
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
  _onMouseOver() {}
}

export default new ContactsView();
