import View from "./view.js";
import * as Elements from "../config.js";
import newContactView from "./newContactView.js";

class manageContactView extends View {
  _editBtn;
  _editIcon;
  _contentEl;
  _editBtnParent;

  constructor() {
    super();
    this._readEl();
    this._readEditIcon();
  }

  // Retrieve contacts object
  getThisData(data) {
    if (!Array.isArray(data)) this._contactsObject = Object.entries(data);
  }
  // Read in element to get contact number
  _readEl() {
    this._contentEl = document.querySelector(".contacts");
  }
  // Store required element's detail for future use
  _readEditIcon() {
    this._editBtnParent = document.querySelector(".new--contact-window");

    this._editBtnParent.addEventListener("mouseover", () => {
      this._editIcon = document.querySelector("#display-edit--icon");
    });
  }
  // Parse the contact's records into the input fields
  _displayContactDetails(profile) {
    Elements.firstName.value = profile.firstName;
    Elements.firstName.value = profile.firstName;
    Elements.middleName.value = profile.middleName;
    Elements.lastName.value = profile.lastName;
    Elements.dateOfBirth.value = profile.dateOfBirth;
    Elements.emailAddress.value = profile.emailAddress;
    Elements.website.value = profile.website;
    Elements.facebook.value = profile.facebook;
    Elements.instagram.value = profile.instagram;
    Elements.x.value = profile.x;
    Elements.tiktok.value = profile.tiktok;
    Elements.pinterest.value = profile.pinterest;
    Elements.linkedIn.value = profile.linkedIn;
    Elements.youtube.value = profile.youtube;
    Elements.snapchat.value = profile.snapchat;
    Elements.prefix.value = profile.prefix;
    Elements.profileImg.src = profile.profileImage;
  }
  // Display selected contact details for editing
  _editContact(id, contact) {
    this._editBtnParent.addEventListener("mouseover", () => {
      this._editIcon.addEventListener("click", (e) => {
        newContactView._newContactContainer.classList.remove("hidden");
        document.querySelector(".upload__btn").classList.add("hidden");
        document.querySelector(".update__btn").classList.remove("hidden");

        // If the expandLess/ showLess icons are active, reset them on contact edit load
        this._expandLessShowLess();

        newContactView._escKeyPress();
      });
      this._contactId = id;

      this._displayContactDetails(contact);
    });
  }
  _expandLessShowLess() {
    if (!Elements.expandLess.classList.contains("hidden")) {
      Elements.prefixContainer.classList.toggle("extra");
      Elements.middleNameContainer.classList.toggle("extra");
      Elements.suffixContainer.classList.toggle("extra");
      Elements.expandMore.classList.toggle("hidden");
      Elements.expandLess.classList.toggle("hidden");
    }

    if (!Elements.showLess.classList.contains("hidden")) {
      Elements.socialInfo.classList.toggle("extra");
      Elements.showMore.classList.toggle("hidden");
      Elements.showLess.classList.toggle("hidden");
    }
  }
  // Listen to click event of select contact and retrieve phone number
  addHandlerGetNumber(handler, number) {
    this._contentEl.addEventListener("click", (e) => {
      const targetEl = e.target.closest("tr");

      for (let i = 0; i < Object.keys(this._contactsObject).length; i++) {
        if (
          this._contactsObject[i][1]?.phoneNumber === null ||
          this._contactsObject[i][1]?.phoneNumber === undefined
        )
          return;
        else if (this._contactsObject[i][0] === targetEl.id) {
          number = this._contactsObject[i][1].phoneNumber;
          return handler(number);
        }
      }
    });
  }
  addHandlerUpdateContact(handler) {
    document.querySelector(".update__btn").addEventListener("click", (e) => {
      e.preventDefault();

      // Create an object of entered values
      const contactUpdate = {
        profileImage: Elements.profileImg.src,
        prefix: Elements.prefix.value ? Elements.prefix.value : "N/A",
        firstName: Elements.firstName.value,
        middleName: Elements.middleName.value
          ? Elements.middleName.value
          : "N/A",
        lastName: Elements.lastName.value,
        suffix: Elements.suffix.value ? Elements.suffix.value : "N/A",
        dateOfBirth: Elements.dateOfBirth.value,
        emailAddress: Elements.emailAddress.value
          ? Elements.emailAddress.value
          : "N/A",
        website: Elements.website.value ? Elements.website.value : "N/A",
        facebook: Elements.facebook.value ? Elements.facebook.value : "N/A",
        instagram: Elements.instagram.value ? Elements.instagram.value : "N/A",
        x: Elements.x.value ? Elements.x.value : "N/A",
        tiktok: Elements.tiktok.value ? Elements.tiktok.value : "N/A",
        pinterest: Elements.pinterest.value ? Elements.pinterest.value : "N/A",
        linkedIn: Elements.linkedIn.value ? Elements.linkedIn.value : "N/A",
        youtube: Elements.youtube.value ? Elements.youtube.value : "N/A",
        snapchat: Elements.snapchat.value ? Elements.snapchat.value : "N/A",
      };

      handler(this._contactId, contactUpdate);
    });
  }

  _deleteContact() {}
  _deleteAllContacts() {}
}

export default new manageContactView();
