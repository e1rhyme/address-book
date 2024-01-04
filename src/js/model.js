import { RES_PER_PAGE, countryCode } from "/src/js/config.js";

const message__emptyFields = "Please fill the required fields";
const message__noRecords = "No records found";

// State object: holds all contacts' info
export const state = {
  contact: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  special: [],
};

// Check if stored contacts exist
export function loadAddressBook(handler) {
  // debugger;

  const contacts = localStorage.getItem("myContacts");

  if (!contacts) return handler(false);

  // Convert JSON string back to an object
  state.contact = JSON.parse(contacts);

  handler(true);
}

// Resolves default international call code to user's IP
const getIp = function (callback) {
  fetch("https://ipinfo.io/json?token=5d4e92bd7304ea", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => resp.json())
    .catch(() => {
      return {
        country: "us",
      };
    })
    .then((resp) => callback(resp.country));
};

// Load the international code list
const phoneInput = window.intlTelInput(countryCode, {
  preferredCountries: ["ng", "gb", "us"],
  initialCountry: "auto",
  geoIpLookup: getIp,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

// Save new contact to local storage
export const uploadNewContact = function (data) {
  // debugger;

  // Get entered phone number
  const phoneNumber = phoneInput.getNumber();

  // Check compulsory fields have data
  if (
    phoneNumber === "" ||
    data.lastName === "" ||
    data.firstName === "" ||
    data.dateOfBirth === "" ||
    data.emailAddress === ""
  )
    alert(message__emptyFields);
  else {
    const newContact = {
      personalDetails: {
        prefix: data.prefix,
        firstName: data.firstName,
        middleName: data.middleName,
        lastName: data.lastName,
        suffix: data.suffix,
        dateOfBirth: data.dateOfBirth,
        profileImage: data.profileImg,
      },
      contactDetails: {
        emailAddress: data.emailAddress,
        mobileNumber: phoneNumber,
        website: data.website,
      },
      socialHandles: {
        facebook: data.facebook,
        instagram: data.instagram,
        x: data.x,
        tiktok: data.tiktok,
        pinterest: data.pinterest,
        linkedIn: data.linkedIn,
        youtube: data.youtube,
        snapchat: data.snapchat,
      },
    };

    // Store new contact in state
    state.contact = newContact;

    // Upload new contact to local storage
    localStorage.setItem("myContacts", JSON.stringify(newContact));
  }
};

function clearStorage() {
  localStorage.clear();
}
// clearStorage();
