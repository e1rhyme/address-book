import * as model from "./model.js";
import contactsView from "./view/contactsView.js";
import newContactView from "./view/newContactView.js";
import displayContactView from "./view/newContactView.js";

// Handles loading of contacts in the view
function controlLoadContacts(condition) {
  // No contact exist
  if (!condition) contactsView.render(undefined, condition, "load");
  // contacts exist
  else contactsView.render(model.state.contact, condition, "load");
}
// Handles upload of a new contact
function controlUploadContact(data) {
  model.uploadNewContact(data);
  contactsView.render(model.state.contact, true, "create");
  newContactView.render(model.state.contact, false);
}
// App initialization function
const init = function () {
  model.loadAddressBook(controlLoadContacts);
  newContactView.addHandlerUploadContact(controlUploadContact);
};

// App initialization call
init();
