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
  displayContactView.getThisData(model.state.contact);
  manageContactView.getThisData(model.state.contact);
}
// Handles upload of a new contact
function controlUploadContact(data) {
  model.uploadNewContact(data);
  contactsView.render(model.state.contact, true, "create");
  displayContactView.getThisData(model.state.contact);
  manageContactView.getThisData(model.state.contact);
  newContactView.render(model.state.contact, false, "view");
}
function controlGetContactNumber(number) {
  model.getContactNumber(number);
}

// App initialization function
const init = function () {
  model.loadAddressBook(controlLoadContacts);
  newContactView.addHandlerUploadContact(controlUploadContact);
  manageContactView.addHandlerGetNumber(controlGetContactNumber);
};

// App initialization call
init();
