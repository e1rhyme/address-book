import View from "./view.js";
import * as Elements from "../config.js";
import manageContactView from "./manageContactView.js";
import displayContactView from "./displayContactView.js";

class NewContactView extends View {
  _parentEl = document.querySelector(".new--contact-window");
  _addRecordBtn = document.querySelector(".add-record");
  _landing = document.querySelector(".landing");
  _addressBook = document.querySelector(".address-book");
  _newOverlay = document.querySelector(".new--overlay");
  _newContactContainer = document.querySelector(".new-contact-container");
  _addContactLink = document.querySelector(".add-contact-link");
  _addContactWindow = document.querySelector(".add-contact-window");
  _selectedId;

  constructor() {
    super();
    this._showMore();
    this._showLess();
    this._addContact();
    this._closeModal();
    this._expandMore();
    this._expandLess();
    this._profileImg();
    this._closeOverlay();
    this._newCloseOverlay();
    this._profileImgContainer();
    this._createContact();
  }

  // Display add new contact modal
  _addContact() {
    this._addRecordBtn.addEventListener("click", () => {
      this._newContactContainer.classList.remove("hidden");
      document.querySelector(".upload__btn").classList.remove("hidden");
      document.querySelector(".update__btn").classList.add("hidden");
      this._resetFormElements();
      this._escKeyPress();
    });
  }
  // Handler to close modal on click of X
  _closeModal() {
    Elements.closeModal.addEventListener("click", () => {
      this._newContactContainer.classList.toggle("hidden");
      this._resetFormElements();
    });
  }
  // Handler to close modal on click of overlay
  _closeOverlay() {
    Elements.overlay.addEventListener("click", () => {
      this._newContactContainer.classList.toggle("hidden");
      this._resetFormElements();
    });
  }
  _newCloseOverlay() {
    this._newOverlay.addEventListener("click", () => {
      this._newOverlay.classList.add("hidden");
      this._parentEl.classList.add("hidden");
    });
  }
  // Handlers to collapse/ expand name details
  _expandMore() {
    Elements.expandMore.addEventListener("click", () => {
      Elements.prefixContainer.classList.toggle("extra");
      Elements.middleNameContainer.classList.toggle("extra");
      Elements.suffixContainer.classList.toggle("extra");
      Elements.expandMore.classList.toggle("hidden");
      Elements.expandLess.classList.toggle("hidden");
    });
  }
  _expandLess() {
    Elements.expandLess.addEventListener("click", () => {
      Elements.prefixContainer.classList.toggle("extra");
      Elements.middleNameContainer.classList.toggle("extra");
      Elements.suffixContainer.classList.toggle("extra");
      Elements.expandMore.classList.toggle("hidden");
      Elements.expandLess.classList.toggle("hidden");
    });
  }
  // Handlers to collapse/ expand social details
  _showMore() {
    Elements.showMore.addEventListener("click", () => {
      Elements.socialInfo.classList.toggle("extra");
      Elements.showMore.classList.toggle("hidden");
      Elements.showLess.classList.toggle("hidden");
    });
  }
  _showLess() {
    Elements.showLess.addEventListener("click", () => {
      Elements.socialInfo.classList.toggle("extra");
      Elements.showMore.classList.toggle("hidden");
      Elements.showLess.classList.toggle("hidden");
    });
  }
  // Hanlders for upload of contact's profile image
  _profileImg() {
    Elements.profileImg.addEventListener("click", this._getImageDetails);
  }
  _profileImgContainer() {
    Elements.profileImgContainer.addEventListener(
      "click",
      this._getImageDetails
    );
  }
  _getImageDetails() {
    Elements.dialogBox.click();

    Elements.dialogBox.addEventListener("change", function () {
      Elements.profileImg.src = URL.createObjectURL(
        Elements.dialogBox.files[0]
      );
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        Elements.profileImg.src = reader.result;
      });
      reader.readAsDataURL(this.files[0]);
    });
  }
  // Set markup for display of contacts
  _getMarkup() {
    displayContactView.getThisData(this._fullContactDetails);

    const imgEl = document.querySelector(".contact--profile-img");

    imgEl.addEventListener("load", (e) => {
      const el = e.target.closest("tr");
      // Retrieve ID of selected contact
      this._selectedId = this._contactId.slice(this._contactId.length - 1);
      // console.log(this._contactId);
      // console.log(this._selectedId);
      displayContactView._getContactDetails(this._selectedId);
    });
  }
  // Set visibility of elements based on data
  _setElementsVisibility() {
    this._landing.classList.add("hidden");
    this._newContactContainer.classList.add("hidden");
    this._parentEl.classList.remove("hidden");
    this._newOverlay.classList.remove("hidden");
    this._addressBook.classList.remove("hidden");

    this._escKeyPress();
  }
  // Create new user from address-book interface
  _createContact() {
    this._addContactLink.addEventListener("click", () => {
      this._newContactContainer.classList.remove("hidden");
      document.querySelector(".upload__btn").classList.remove("hidden");
      document.querySelector(".update__btn").classList.add("hidden");

      this._escKeyPress();
      this._resetFormElements();
    });
  }
  // Reset form elements
  _resetFormElements() {
    document.getElementById("contact-form").reset();
    Elements.profileImg.src = "/src/img/profile.png";
    Elements.countryCode.value = "";
    Elements.facebook.value = "";
    Elements.instagram.value = "";
    Elements.x.value = "";
    Elements.tiktok.value = "";
    Elements.linkedIn.value = "";
    Elements.youtube.value = "";
    Elements.pinterest.value = "";
    Elements.snapchat.value = "";
  }
  // Handler for upload contact click event
  addHandlerUploadContact(handler) {
    Elements.contactUpload.addEventListener("click", function (e) {
      e.preventDefault();

      // Create an object of entered values
      const newContact = {
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

      handler(newContact);
    });
  }
}

export default new NewContactView();
