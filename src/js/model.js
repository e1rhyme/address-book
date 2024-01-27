import { RES_PER_PAGE, countryCode } from "/src/js/config.js";

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
  userID: 1,
};

// Check if stored contacts exist
export function loadAddressBook(handler) {
  const contacts = localStorage.getItem("myContacts");

  if (!contacts) return handler(false);

  // Call to retrieve current userID
  const currentUserID = +getUserID(contacts);
  // Set new userID in the state
  state.userID = currentUserID + 1;
  // Convert JSON string back to an object
  state.contact = JSON.parse(contacts);

  handler(true);
}
// Retrieve contact userID
function getUserID(user) {
  const userID = Object.entries(JSON.parse(user));
  const id = userID.pop()[0];

  return id;
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

  //   try {
  //   const data = await fetch("https://ipinfo.io/json?token=5d4e92bd7304ea", {
  //     headers: { Accept: "application/json" },
  //   })
  //     .then((resp) => resp.json())
  //     .catch(() => {
  //       return {
  //         country: "us",
  //       };
  //     })
  //     .then((resp) => callback(resp.country));
  // } catch {}
};
// Load the international code list
const phoneInput = window.intlTelInput(countryCode, {
  // preferredCountries: ["ng", "gb", "us"],
  initialCountry: "auto",
  geoIpLookup: getIp,
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
// Set unique user IDs
function newUserID(id) {
  id = id.padStart(3, "0");

  state.userID = (+state.userID + 1).toString();

  return id;
}
export const getContactNumber = function (number) {
  // Set user account number
  const userNumber = window.intlTelInput(countryCode, {
    formatOnDisplay: false,
    separateDialCode: true,
    utilsScript: "build/js/utils.js",
  });
  setTimeout(() => {
    userNumber.setNumber(number);
  }, 2000);
};
// Save new contact to local storage
export const uploadNewContact = function (newUser) {
  // Set user account number
  let phoneNumber = phoneInput.getNumber();
  phoneNumber = phoneNumber ? phoneNumber : "N/A";

  // Check compulsory fields have newUse
  if (
    newUser.firstName === "" ||
    newUser.lastName === ""
    // ||
    // newUser.emailAddress === ""
  )
    return;
  else {
    // Set user phone number and profile image path
    newUser.phoneNumber = phoneNumber;
    // Get unique userID
    const id = newUserID(state.userID.toString());

    state.contact[id] = newUser;

    // Upload new contact to local storage
    localStorage.setItem("myContacts", JSON.stringify(state.contact));

    return newUser;
  }
};
export const updateExistingContact = function (contact) {};

// Temp fnx
function clearStorage() {
  localStorage.clear();
}
// clearStorage();
