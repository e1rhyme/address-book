// Set pagination range (nos pages to load)
export const RES_PER_PAGE = 10;
export const countryCode = document.querySelector("#phone");

// Elements for no records
export const landing = document.querySelector(".landing");
export const addressBook = document.querySelector(".address-book");
export const overlay = document.querySelector(".overlay");

// New user form modal
export const dialogBox = document.getElementById("dialog");
export const closeModal = document.querySelector(".btn--close-modal");
export const profileImg = document.querySelector(".profile-img");
export const profileImgContainer = document.querySelector(".circle-plus");
export const prefix = document.getElementById("prefix");
export const prefixContainer = document.querySelector(".prefix");
export const firstName = document.getElementById("fName");
export const middleName = document.getElementById("mName");
export const middleNameContainer = document.querySelector(".mName");
export const lastName = document.getElementById("lName");
export const suffix = document.getElementById("suffix");
export const suffixContainer = document.querySelector(".suffix");
export const emailAddress = document.getElementById("email");
export const mobileNumber = document.getElementById("mobile-number");
export const dateOfBirth = document.getElementById("birthday");
export const website = document.getElementById("websiteURL");
export const facebook = document.getElementById("facebook");
export const instagram = document.getElementById("instagram");
export const x = document.getElementById("x");
export const tiktok = document.getElementById("tiktok");
export const linkedIn = document.getElementById("linkedin");
export const youtube = document.getElementById("youtube");
export const pinterest = document.getElementById("pinterest");
export const snapchat = document.getElementById("snapchat");
export const socialInfo = document.querySelector(".social-info");
export const url = document.querySelector("url");
export const contactUpload = document.querySelector(".upload__btn");
export const uploadForm = document.getElementById("contact-from");
export const emailContainer = document.querySelector(".email-container");
export const mobileContainer = document.querySelector(".mobile-container");
export const expandMore = document.querySelector(".expand_more");
export const expandLess = document.querySelector(".expand_less");
export const showMore = document.querySelector(".show-more");
export const showLess = document.querySelector(".show-less");
export const addEmail = document.querySelector(".add-email");
export const addMobile = document.querySelector(".add-mobile");

// Contacts list view
export const headerContactLink = document.querySelector(".header-contact-link");
export const contactsListContainer = document.querySelector(
  ".contacts-list-container"
);

// New User Preview
export const userProfileImg = document.querySelector(".user-profile-img");
export const userProfileImgContainer = document.querySelector(
  ".user-img__container"
);

// Updates any numerical values that are more than or equal to 4, and changes them to 10:
// console.log(Object.keys(myObject));

const myObj = {
  "001": {
    profileImage:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAA…zcVgDtHGHP0Pxw/M33/1/wRgHp0gb9uIAAAAASUVORK5CYII=",
    prefix: "N/A",
    firstName: "Elon",
    middleName: "N/A",
    lastName: "Musk",
  },
  "002": {
    profileImage:
      "data:image/jpeg;base64,/9j/4Rg1RXhpZgAASUkqAAgAAAA…r+A/3X8v9dX2XF/r/ALD36j0pXy/y1/1fLr1BX4fP/J1//9k=",
    prefix: "N/A",
    firstName: "Emo",
    middleName: "N/A",
    lastName: "Onerhime",
  },
  "003": {
    profileImage:
      "data:image/jpeg;base64,/9j/4SoQRXhpZgAATU0AKgAAAAg…k/wCv+v8Ar+illdPY0b69D+VSr6kzad3fVSde56NhjnOn/9k=",
    prefix: "Mrs.",
    firstName: "Ifeoma",
    middleName: "Erica",
    lastName: "Emo-Onerhime",
  },
  "004": {
    profileImage:
      "data:image/jpeg;base64,/9j/4Rg1RXhpZgAASUkqAAgAAAA…r+A/3X8v9dX2XF/r/ALD36j0pXy/y1/1fLr1BX4fP/J1//9k=",
    prefix: "N/A",
    firstName: "Emo",
    middleName: "N/A",
    lastName: "Onerhime",
  },
};

const replacement = {
  profileImage:
    "data:image/jpeg;base64,/9j/4Rg1RXhpZgAASUkqAAgAAAA…r+A/3X8v9dX2XF/r/ALD36j0pXy/y1/1fLr1BX4fP/J1//9k=",
  prefix: "Chief",
  firstName: "Freghene",
  middleName: "Heineken",
  lastName: "Okugbeni",
};

// Object.keys(myObj).forEach((item, key) => {
//   if (key === 1) {
//     console.log((myObj[item] = replacement));
//     console.log(myObj);
//   }
// });
