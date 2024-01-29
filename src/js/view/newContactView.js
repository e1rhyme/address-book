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
  _contactEl;

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
    this._data = this._data.flat();
    displayContactView.getThisData(this._data);

    const imgEl = document.querySelector(".contact--profile-img");
    console.log(imgEl);
    // imgEl.addEventListener("load", (e) => {
    //   const el = e.target.closest("tr");
    //   console.log(el.id);
    //   displayContactView._getContactDetails(el.id);
    // });

    // return `
    //   <button id="btn--edit">
    //     <svg id="svg-edit--icon"
    //       xmlns="http://www.w3.org/2000/svg"
    //       height="24"
    //       viewBox="0 -960 960 960"
    //       width="24"
    //     >
    //       <path
    //         d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
    //       />
    //     </svg>
    //   </button>
    //   <div class="hover-text hidden">
    //     <span class="tooltip-text fade" id="bottom">Click to edit contact</span>
    //   </div>
    //   <div class="new--profile-container">
    //     <div class="new--img__container">
    //       <img src="${
    //         this._data[0].profileImage
    //           ? this._data[0].profileImage
    //           : "/src/img/profile.png"
    //       }" alt="Profile Image" class="new--profile-img" />
    //       </div>
    //       <div id="new--contact-name">
    //         <label>${
    //           this._data[0].prefix === "N/A"
    //             ? ""
    //             : this._data[0].prefixContainer
    //         } ${
    //   this._data[0].firstName === "N/A" ? "" : this._data[0].firstName
    // } ${this._data[0].middleName === "N/A" ? "" : this._data[0].middleName} ${
    //   this._data[0].lastName === "N/A" ? "" : this._data[0].lastName
    // }
    //         </label>
    //       </div>
    //     </div>

    //     <!-- NEW USER INFORMATION -->
    //     <div class="new--personal-info-container">
    //       <!-- KEY PERSONAL INFORMATION -->
    //         <div class="personal-info-block pib-email">
    //         <label id="preview-email-address">
    //                 ${
    //                   this._data[0].emailAddress
    //                     ? this._data[0].emailAddress
    //                     : ""
    //                 }
    //         </label>
    //         <label> Email </label>
    //       </div>

    //       <div class="personal-info-block pib-mobile">
    //         <label id="preview-mobile-number"> ${
    //           this._data[0].phoneNumber ? this._data[0].phoneNumber : ""
    //         } </label>
    //         <label> Mobile </label>
    //       </div>

    //       <div class="personal-info-block pib-website">
    //         <label id="preview-website"> ${
    //           this._data[0].website ? this._data[0].website : ""
    //         }</label>
    //         <label> Web address </label>
    //       </div>
    //     </div>

    //     <div class="personal-info-block pib-dob">
    //         <label id="preview-dob">
    //                 ${
    //                   this._data[0].dateOfBirth ? this._data[0].dateOfBirth : ""
    //                 }
    //         </label>
    //         <label> Birthday </label>
    //       </div>

    //     <div class="new--social-handles-header">
    //       <h2>Social Handles</h2>
    //     </div>

    //     <div class="new--social-handles">
    //       <div class="social-handles personal-info-block">
    //       <img
    //         width="24"
    //         height="24"
    //         src="https://img.icons8.com/color/48/facebook-new.png"
    //         alt="facebook"
    //       />
    //       <label id="preview-facebook"> ${
    //         this._data[0].facebook ? this._data[0].facebook : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="24"
    //         height="24"
    //         src="https://img.icons8.com/fluency/48/instagram-new.png"
    //         alt="instagram-new"
    //       />
    //       <label id="preview-instagram"> ${
    //         this._data[0].instagram ? this._data[0].instagram : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="25"
    //         height="25"
    //         src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
    //         alt="twitterx--v1"
    //       />
    //       <label id="preview-x"> ${
    //         this._data[0].x ? this._data[0].x : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="25"
    //         height="25"
    //         src="https://img.icons8.com/ios-filled/50/tiktok--v1.png"
    //         alt="tiktok--v1"
    //       />
    //       <label id="preview-tiktok"> ${
    //         this._data[0].tiktok ? this._data[0].tiktok : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="24"
    //         height="24"
    //         src="https://img.icons8.com/fluency/48/linkedin.png"
    //         alt="linkedin"
    //       />
    //       <label id="preview-linkedin"> ${
    //         this._data[0].linkedIn ? this._data[0].linkedIn : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="24"
    //         height="24"
    //         src="https://img.icons8.com/color/48/pinterest--v1.png"
    //         alt="pinterest--v1"
    //       />
    //       <label id="preview-pinterest"> ${
    //         this._data[0].pinterest ? this._data[0].pinterest : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="24"
    //         height="24"
    //         src="https://img.icons8.com/color/48/youtube-play.png"
    //         alt="youtube-play"
    //       />
    //       <label id="preview-youtube"> ${
    //         this._data[0].youtube ? this._data[0].youtube : ""
    //       } </label>
    //     </div>

    //     <div class="social-handles personal-info-block">
    //       <img
    //         width="24"
    //         height="24"
    //         src="https://img.icons8.com/fluency/48/snapchat.png"
    //         alt="snapchat"
    //       />
    //       <label id="preview-snapchat"> ${
    //         this._data[0].snapchat ? this._data[0].snapchat : ""
    //       } </label>
    //     </div>
    //   </div>
    // `;
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
