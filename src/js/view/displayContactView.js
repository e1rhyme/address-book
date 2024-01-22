import View from "./view.js";

class DisplayContactView extends View {
  _parentEl = document.querySelector(".contacts");

  constructor() {
    super();
    this._addContact();
  }

  // Display add new contact modal
  _addContact() {
    console.log(this.__parentEl);

    this._addRecordBtn.addEventListener("click", () => {
      this._newContactContainer.classList.remove("hidden");
      // this._newContactContainer.classList.toggle("hidden");
    });
  }
}

export default new DisplayContactView();
