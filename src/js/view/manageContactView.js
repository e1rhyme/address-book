import View from "./view.js";
import * as Elements from "../config.js";
import displayContactView from "./displayContactView.js";
import newContactView from "./newContactView.js";

class manageContactView extends View {
  _parentEl = document.querySelector(".contacts");
  _editBtnParent = document.querySelector(".new--contact-window");
  _editBtn;
  _contactDetails;

  constructor() {
    super();
  }

  _displayContactDetails(profile) {
    Elements.firstName.value = profile.firstName;
    Elements.firstName.value = profile.firstName;
    Elements.middleName.value = profile.middleName;
    Elements.lastName.value = profile.lastName;
    Elements.dateOfBirth.value = profile.dateOfBirth;
    // Elements.countryCode = profile.phoneNumber;
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

    document.querySelector(".upload__btn").value = "Update Contact";
  }
  // _editContact(contact) {
  //   this._editBtnParent.addEventListener("mouseover", (event) => {
  //     document
  //       .querySelector("#svg-edit--icon")
  //       .addEventListener("click", (e) => {
  //         newContactView._newContactContainer.classList.remove("hidden");

  //         newContactView._escKeyPress();
  //       });
  //     this._displayContactDetails(contact);
  //   });
  // }

  /*
  load event from controller and send through handler the user phone details
    - check if the phone number available
  controller call the model to set the phone number
  */
  addHandlerEditContact(contact) {
    this._editBtnParent.addEventListener("mouseover", (event) => {
      document
        .querySelector("#svg-edit--icon")
        .addEventListener("click", (e) => {
          newContactView._newContactContainer.classList.remove("hidden");

          newContactView._escKeyPress();
        });
      this._displayContactDetails(contact);
    });
  }

  _deleteContact() {}
  _deleteAllContacts() {}
}

export default new manageContactView();
