import View from "./view.js";
import manageContactView from "./manageContactView.js";

class DeleteContactView extends View {
  _cancel;
  _target;
  _confirm;
  _targetEl;
  _chkboxes;
  _contactId;
  _datasetTarget;
  _targetContainer;
  _deleteContactContainer;
  _parentEl = document.querySelector(".contacts");
  _tableContainer = document.querySelector(".tbl");
  _overlay = document.querySelector(".delete--overlay");

  constructor() {
    super();
    this._deleteAllContactsCheck();
    this._cancelDeleteAllContacts();
  }

  addHandlerDeleteContact(handler) {
    this._parentEl.addEventListener("mouseover", (e) => {
      this._targetContainer = e.target.closest("tr");
      this._contactId = this._targetContainer.id;

      this._targetContainer
        ? this._targetContainer.addEventListener("mouseover", (e) => {
            this._targetEl = e.target.closest(".contacts--delete-icon");

            if (!this._targetEl) return;
            else {
              this._datasetTarget = this._targetEl.dataset["action"];
              this._datasetTarget === "delete"
                ? this._targetEl.addEventListener("click", () => {
                    this._target = document.querySelector(
                      `.delete-contact-container-${this._contactId}`
                    );
                    // Set element style
                    manageContactView._setDeleteContactContainerStyle(
                      this._target
                    );
                    // Query confirm button element
                    this._confirm = document.querySelector(
                      `.confirm-btn-${this._contactId}`
                    );
                    // Query cancel button element
                    this._cancel = document.querySelector(
                      `.cancel-btn-${this._contactId}`
                    );
                    // Make confirm and cancel buttons visible
                    this._target.classList.remove("hidden");
                    // Set styling for confirm and cancel buttons
                    manageContactView._setButtonsElementStyle(
                      this._confirm,
                      this._cancel
                    );
                    // Handles cancel delete aciton
                    manageContactView._cancleDeleteAction(
                      this._contactId,
                      this._target
                    );
                    // Handles the hover event for cancel/ delete elements
                    manageContactView._setTrMouseoverState(
                      this._contactId,
                      this._targetContainer
                    );

                    // Delete the contact
                    this._confirm.onclick = (e) => {
                      e.preventDefault();
                      handler(this._contactId);
                    };
                  })
                : null;
            }
          })
        : null;
    });
  }
  _deleteAllContactsCheck() {
    this._tableContainer
      ? this._tableContainer.addEventListener("click", (e) => {
          this._target = e.target.closest("input[type='checkbox']");

          this._chkboxes = document.querySelectorAll(".icon--checkbox");
          this._deleteContactContainer = document.querySelector(
            ".delete-contact-container"
          );

          if (!this._target?.checked) {
            this._chkboxes.forEach((chkbox) => {
              chkbox.checked = false;
              chkbox.classList.add("hidden");
            });
          } else {
            this._target.checked = true;
            this._chkboxes.forEach((chkbox) => {
              chkbox.checked = true;
              chkbox.classList.remove("hidden");
              this._overlay.classList.remove("hidden");
              this._deleteContactContainer.style.display = "flex";
              this._deleteContactContainer.style.visibility = "visible";
            });
          }
        })
      : null;
  }
  _cancelDeleteAllContacts() {
    document.querySelector(".cancel-btn").addEventListener("click", () => {
      this._target.checked = false;
      this._chkboxes.forEach((chkbox) => {
        chkbox.checked = false;
        chkbox.classList.add("hidden");
      });
      this._overlay.classList.add("hidden");

      this._deleteContactContainer.style.visibility = "hidden";
      this._deleteContactContainer.style.display = "none";
    });
  }
  addHandlerDeleteAllContacts(handler) {
    // debugger;
    this._tableContainer
      ? this._tableContainer.addEventListener("click", (e) => {
          const confirmBtn = document.querySelector(".confirm-btn");
          const btnStatus = confirmBtn.dataset.status;

          btnStatus === "delete"
            ? confirmBtn.addEventListener("click", () => {
                handler();
              })
            : null;
        })
      : null;
  }
}

export default new DeleteContactView();
