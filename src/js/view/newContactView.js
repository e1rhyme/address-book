import View from "./view.js";
import * as Elements from "../config.js";

class NewContactView extends View {
  // overlay = document.querySelector(".overlay");
  // // addRecordBtn = document.querySelector(".add-record");
  // newContact = document.querySelector(".new-contact");
  // // prefix = document.getElementById("prefix");
  // prefixContainer = document.querySelector(".prefix");
  // firstName = document.getElementById("fName");
  // middleName = document.getElementById("mName");
  // middleNameContainer = document.querySelector(".mName");
  // lastName = document.getElementById("lName");
  // suffix = document.getElementById("suffix");
  // suffixContainer = document.querySelector(".suffix");
  // emailAddress = document.getElementById("email");
  // dateOfBirth = document.getElementById("birthday");
  // website = document.getElementById("websiteURL");
  // facebook = document.getElementById("facebook");
  // instagram = document.getElementById("instagram");
  // x = document.getElementById("x");
  // tiktok = document.getElementById("tiktok");
  // linkedIn = document.getElementById("linkedin");
  // youtube = document.getElementById("youtube");
  // pinterest = document.getElementById("pinterest");
  // snapchat = document.getElementById("snapchat");
  // socialInfo = document.querySelector(".social-info");
  // closeModal = document.querySelector(".btn--close-modal");
  // expandMore = document.querySelector(".expand_more");
  // expandLess = document.querySelector(".expand_less");
  // showMore = document.querySelector(".show-more");
  // showLess = document.querySelector(".show-less");
  // profileImg = document.querySelector(".profile-img");
  // profileImgContainer = document.querySelector(".img__container");
  // contactUpload = document.querySelector(".upload__btn");

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
    Elements.showMore.addEventListener("click", () => {
      Elements.socialInfo.classList.toggle("extra");
      Elements.showMore.classList.toggle("hidden");
      Elements.showLess.classList.toggle("hidden");
    });
  }
  // Hanlder for upload of contact's profile image
  addHandlerProfileImgContainer() {
    Elements.profileImgContainer.addEventListener("click", function (e) {
      const btn = e.target.closest(".circle-plus");

      if (!btn) return;

      imgPath();
    });
  }
  addHandlerProfileImg() {
    Elements.profileImg.addEventListener("click", () => this.imgPath());
  }
  // Handler for upload contact click event
  addHandlerUploadContact(handler) {
    Elements.contactUpload.addEventListener("click", function (e) {
      e.preventDefault();

      // Create an object of entered values

      const newContact = {
        prefix: Elements.prefix.value,
        firstName: Elements.firstName.value,
        middleName: Elements.middleName.value,
        lastName: Elements.lastName.value,
        suffix: Elements.suffix.value,
        dateOfBirth: Elements.dateOfBirth.value,
        profileImg: Elements.profileImg.src,
        emailAddress: Elements.emailAddress.value,
        website: Elements.website.value,
        facebook: Elements.facebook.value,
        instagram: Elements.instagram.value,
        x: Elements.x.value,
        tiktok: Elements.tiktok.value,
        pinterest: Elements.pinterest.value,
        linkedIn: Elements.linkedIn.value,
        youtube: Elements.youtube.value,
        snapchat: Elements.snapchat,
      };

      handler(newContact);
    });
  }
}

export default new NewContactView();
