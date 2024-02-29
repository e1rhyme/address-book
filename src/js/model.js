import { RES_PER_PAGE, countryCode } from "/src/js/config.js";

let contactNumber;

// State object: holds all contacts' info
export const state = {
  contact: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  trash: {},
  special: [],
  userID: 1,
};

// Check if stored contacts exist
export function loadAddressBook(handler) {
  const contacts = localStorage.getItem("myContacts");

  if (!contacts || Object.keys(contacts).length === 0) return handler(false);

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
};
// Load the international code list
function initializeTel() {
  const iti = window.intlTelInput(countryCode, {
    preferredCountries: ["ng", "gb", "us"],
    geoIpLookup: getIp,
    nationalMode: true,
    allowDropdown: false,
    formatOnDisplay: false,
    initialCountry: "auto",
    separateDialCode: false,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.15/build/js/utils.js",
  });
  window.iti = iti;
}
export const getContactNumber = function (number) {
  // Set user account number
  if (window.iti != null || window.iti !== "") {
    window.iti.destroy();
  }
  iti = window.intlTelInput(countryCode, {
    preferredCountries: ["ng", "gb", "us"],
    geoIpLookup: getIp,
    nationalMode: true,
    allowDropdown: false,
    formatOnDisplay: false,
    initialCountry: "auto",
    separateDialCode: false,
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.15/build/js/utils.js",
  });
  setTimeout(() => {
    iti.setNumber(number);
  }, 2000);
};
// Set unique user IDs
function newUserID(id) {
  id = id.padStart(3, "0");

  state.userID = (+state.userID + 1).toString();

  return id;
}
// Save new contact to local storage
export const uploadNewContact = function (newUser) {
  // Set user account number
  let phoneNumber = iti.getNumber();
  phoneNumber = phoneNumber ? phoneNumber : "";

  // Check compulsory fields have newUse
  if (newUser.firstName === "" || newUser.firstName.length <= 1) return null;
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
export const updateExistingContact = function (id, contact) {
  // Retrieve contact's phone number
  let phoneNumber = iti.getNumber();
  phoneNumber = phoneNumber ? phoneNumber : "";

  // Add key/ value pair to contact object
  contact.phoneNumber = phoneNumber;

  Object.keys(state.contact).forEach((key, index, rec) => {
    if (rec[index] === id) {
      state.contact[rec[index]] = contact;
    } else return;

    // Update existing contact in local storage
    localStorage.setItem("myContacts", JSON.stringify(state.contact));
  });
};
export const deleteSingleContact = function (id) {
  // Get updated contacts list
  const updatedContacts = Object.entries(state.contact).filter((objKey) => {
    if (objKey[0] !== id) return objKey;
  });
  // Get deleted contact and store in state object
  const deletedContact = Object.entries(state.contact).filter((objKey) => {
    if (objKey[0] == id) return objKey;
  });
  // Update contacts trash state object
  state.trash = Object.fromEntries(deletedContact);
  // Update contacts list state object
  state.contact = Object.fromEntries(updatedContacts);
  // Check if this is last contact deleted
  if (Object.keys(state.contact).length <= 0) {
    clearLocalStorage();
  }

  // Update contacts list in local storage
  localStorage.setItem("myContacts", JSON.stringify(state.contact));
};
export const deleteAllContact = function () {
  // state.trash = state.contact;
  for (var rec in state.contact) {
    if (state.contact.hasOwnProperty(rec)) {
      delete state.contact[rec];
    }
  }

  state.userID = 1;
  clearLocalStorage();
};
// Temp fnx
function clearLocalStorage() {
  localStorage.clear();
}
// clearLocalStorage();

initializeTel();
