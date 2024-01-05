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
  contactsView.render(model.state.contact);
}
// Handles profile image upload
function controlImageUpload() {
  newContactView.imgPath();
}
function controlImageContainerUpload() {
  newContactView.imgPath();
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
  newContactView.addHandlerProfileImg(controlImageUpload);
  newContactView.addHandlerProfileImgContainer(controlImageContainerUpload);
  newContactView.addHandlerUploadContact(controlUploadContact);
};

// App initialization call
init();
