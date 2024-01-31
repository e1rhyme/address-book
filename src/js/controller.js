import * as model from "./model.js";
import contactsView from "./view/contactsView.js";
import newContactView from "./view/newContactView.js";
import displayContactView from "./view/displayContactView.js";
import manageContactView from "./view/manageContactView.js";

// Handles loading of contacts in the view
function controlLoadContacts(condition) {
  // No contact exist
  if (!condition) contactsView.render(undefined, condition, "load");
  // contacts exist
  else contactsView.render(model.state.contact, condition, "load");
  getThisData();
}
// Handles upload of a new contact
function controlUploadContact(data) {
  model.uploadNewContact(data);
  contactsView.render(model.state.contact, true, "create");
  getThisData();
  newContactView.render(model.state.contact, false, "view");
}
// Pushes contact object for content render
function getThisData() {
  displayContactView.getThisData(model.state.contact);
  manageContactView.getThisData(model.state.contact);
}
function controlGetContactNumber(number) {
  model.getContactNumber(number);
}
function controlUpdateContact(id, contact) {
  model.updateExistingContact(id, contact);
}

// App initialization function
const init = function () {
  model.loadAddressBook(controlLoadContacts);
  newContactView.addHandlerUploadContact(controlUploadContact);
  manageContactView.addHandlerGetNumber(controlGetContactNumber);
  manageContactView.addHandlerUpdateContact(controlUpdateContact);
};

// App initialization call
init();
