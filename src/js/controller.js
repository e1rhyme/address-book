import * as model from "./model.js";
import contactsView from "./view/contactsView.js";
import newContactView from "./view/newContactView.js";

// Handles loading of contacts in the view
function controlLoadContacts(status) {
  if (!status) contactsView.loadContacts(false);
  else contactsView.loadContacts(model.state.contact);
}
// Handles upload of a new contact
function controlUploadContact(data) {
  // debugger;
  model.uploadNewContact(data);
  console.log(model.state.contact);
  contactsView.render(model.state.contact);
}
// App initialization function
const init = function () {
  // debugger;

  model.loadAddressBook(controlLoadContacts);
  newContactView.addHandlerAddContact();
  newContactView.addHandlerCloseModal();
  newContactView.addHandlerCloseOverlay();
  newContactView.addHandlerExpandMore();
  newContactView.addHandlerExpandLess();
  newContactView.addHandlerShowMore();
  newContactView.addHandlerShowLess();
  newContactView.addHandlerProfileImg();
  newContactView.addHandlerProfileImgContainer();
  newContactView.addHandlerUploadContact(controlUploadContact);
};

// App initialization call
init();
