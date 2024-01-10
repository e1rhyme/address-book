import View from "./view.js";
import * as Elements from "../config.js";

class NewContactView extends View {
  _parentEl = document.querySelector(".profile-container");

  // Display add new contact modal
  addHandlerAddContact() {
    Elements.addRecordBtn.addEventListener("click", () => {
      Elements.overlay.classList.toggle("hidden");
      Elements.newContact.classList.toggle("hidden");
    });
  }
  // Handler to close modal on click of X
  addHandlerCloseModal() {
    Elements.closeModal.addEventListener("click", () => {
      Elements.overlay.classList.toggle("hidden");
      Elements.newContact.classList.toggle("hidden");
    });
  }
  // Handler to close modal on click of overlay
  addHandlerCloseOverlay() {
    Elements.overlay.addEventListener("click", () => {
      Elements.overlay.classList.toggle("hidden");
      Elements.newContact.classList.toggle("hidden");
    });
  }
  // Handlers to collapse/ expand name details
  addHandlerExpandMore() {
    Elements.expandMore.addEventListener("click", () => {
      Elements.prefixContainer.classList.toggle("extra");
      Elements.middleNameContainer.classList.toggle("extra");
      Elements.suffixContainer.classList.toggle("extra");
      Elements.expandMore.classList.toggle("hidden");
      Elements.expandLess.classList.toggle("hidden");
    });
  }
  addHandlerExpandLess() {
    Elements.expandLess.addEventListener("click", () => {
      Elements.prefixContainer.classList.toggle("extra");
      Elements.middleNameContainer.classList.toggle("extra");
      Elements.suffixContainer.classList.toggle("extra");
      Elements.expandMore.classList.toggle("hidden");
      Elements.expandLess.classList.toggle("hidden");
    });
  }
  // Handlers to collapse/ expand social details
  addHandlerShowMore() {
    Elements.showMore.addEventListener("click", () => {
      Elements.socialInfo.classList.toggle("extra");
      Elements.showMore.classList.toggle("hidden");
      Elements.showLess.classList.toggle("hidden");
    });
  }
  addHandlerShowLess() {
    Elements.showLess.addEventListener("click", () => {
      Elements.socialInfo.classList.toggle("extra");
      Elements.showMore.classList.toggle("hidden");
      Elements.showLess.classList.toggle("hidden");
    });
  }
  // Hanlder for upload of contact's profile image
  addHandlerProfileImg(handler) {
    Elements.profileImg.addEventListener("click", handler);
  }
  addHandlerProfileImgContainer(handler) {
    Elements.profileImgContainer.addEventListener("click", function (e) {
      const btn = e.target.closest(".circle-plus");

      if (!btn) return;

      handler();
    });
  }
  // Handler for upload contact click event
  addHandlerUploadContact(handler) {
    Elements.contactUpload.addEventListener("click", function (e) {
      e.preventDefault();

      const getIndex = Elements.profileImg.src.indexOf("src") - 1;

      console.log(Elements.profileImg.src);
      console.log(Elements.profileImg.src.slice(getIndex));

      // Create an object of entered values
      const newContact = {
        prefix: Elements.prefix.value,
        firstName: Elements.firstName.value,
        middleName: Elements.middleName.value,
        lastName: Elements.lastName.value,
        suffix: Elements.suffix.value,
        dateOfBirth: Elements.dateOfBirth.value,
        profileImg: Elements.profileImg.src,
        // profileImg: Elements.profileImg.src.slice(getIndex),
        emailAddress: Elements.emailAddress.value,
        website: Elements.website.value,
        facebook: Elements.facebook.value,
        instagram: Elements.instagram.value,
        x: Elements.x.value,
        tiktok: Elements.tiktok.value,
        pinterest: Elements.pinterest.value,
        linkedIn: Elements.linkedIn.value,
        youtube: Elements.youtube.value,
        snapchat: Elements.snapchat.value,
      };
      console.log(Elements.profileImg);

      handler(newContact);
    });
  }
  addHandlerCreateNewContact() {
    Elements.addContact.addEventListener("click", () => {
      Elements.overlay.classList.remove("hidden");
      Elements.newContact.classList.toggle("hidden");
    });
  }
  // Set markup for display of contacts
  _getMarkup() {
    return this._data
      .map((rec, i) => this._generateMarkupPreview(rec))
      .join("");
  }
  _generateMarkupPreview(rec) {
    return `
      <div class="user-img__container">
        <img src="/img/image.png" alt="Profile Image" />
        <input
          type="file"
          accept="image/jpeg, image/png, image/jpg"
          name="dialog"
          id="dialog"
        />
        <div class="add-contact--icon">
          <svg
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            class="user-circle-plus"
          >
            <path d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z" />
          </svg>
        </div>
        <p class="name-container">
          <label class="contact-name">${rec.firstName} ${rec.lastName}</label>
        </p>
    </div>
    `;
  }
  // Set visibility of elements based on data
  _setElementsVisibility(state) {
    if (!state) return this._message;

    this._overlay.classList.toggle("hidden");
    this._landing.classList.toggle("hidden");
    this._newContact.classList.toggle("hidden");
    this._addressBook.classList.toggle("hidden");
    this._parentEl.classList.toggle("hidden");
    state = false;
  }
}

export default new NewContactView();
