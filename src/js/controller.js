import * as model from "./model.js";
import contactsView from "./view/contactsView.js";
import newContactView from "./view/newContactView.js";
import displayContactView from "./view/displayContactView.js";
import manageContactView from "./view/manageContactView.js";
import deleteContactView from "./view/deleteContactView.js";

// Handles loading of contacts in the view
function controlLoadContacts(condition) {
  // No contact exist
  if (!condition) contactsView.render(undefined, condition, "load");
  // contacts exist
  else {
    getThisData();
    contactsView.render(model.state.contact, condition, "load");
  }
}
// Handles upload of a new contact
function controlUploadContact(data) {
  model.uploadNewContact(data);
  getThisData();
  contactsView.render(model.state.contact, true, "create");
  newContactView.render(model.state.contact, false, "view", "new");
}
// Pushes contact object for content render
function getThisData() {
  contactsView.getThisData(model.state.contact);
  manageContactView.getThisData(model.state.contact);
  newContactView.getThisData(model.state.contact);
  displayContactView.getThisData(model.state.contact);
}
function controlGetContactNumber(number) {
  model.getContactNumber(number);
}
function controlUpdateContact(id, contact) {
  model.updateExistingContact(id, contact);
  getThisData();
  contactsView.render(model.state.contact, true, "create");
  newContactView.render(model.state.contact, false, "view", id);
}
function controlDeleteContact(id) {
  model.deleteSingleContact(id);
  // getThisData();
  // contactsView.render(model.state.contact, condition, "load");
}

// App initialization function
const init = function () {
  model.loadAddressBook(controlLoadContacts);
  newContactView.addHandlerUploadContact(controlUploadContact);
  manageContactView.addHandlerGetNumber(controlGetContactNumber);
  manageContactView.addHandlerUpdateContact(controlUpdateContact);
  deleteContactView.addHandlerDeleteContact(controlDeleteContact);
};

// App initialization call
init();
