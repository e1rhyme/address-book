import View from "/src/js/view/view.js";

class DeleteContactView extends View {
  _target;
  _targetEl;
  _contactId;
  _cancelDelete;
  _datasetTarget;
  _targetContainer;
  _cancelDeleteContainer;
  _parentEl = document.querySelector(".contacts");

  constructor() {
    super();
    this._contactsDeleteIcon();
  }

  // Select contact's details to be deleted
  _contactsDeleteIcon(id) {
    this._parentEl.addEventListener("mouseover", (e) => {
      this._targetContainer = e.target.closest(`tr`);

      if (!this._targetContainer) return;
      else {
        this._contactId = this._targetContainer.id;

        this._targetContainer.addEventListener("mouseover", (e) => {
          this._targetEl = e.target.closest(".contacts--delete-icon");

          if (!this._targetEl) return;
          else {
            this._datasetTarget = this._targetEl.dataset["action"];

            if (!this._datasetTarget === "delete") return;
            else {
              this._targetEl.addEventListener("click", () => {
                this._target = document.querySelector(
                  `.delete-contact-container-${this._contactId}`
                );

                this._setDeleteContactContainerStyle(this._target);

                // Query confirm button element
                const confirm = document.querySelector(
                  `.confirm-btn-${this._contactId}`
                );

                // Query cancel button element
                const cancel = document.querySelector(
                  `.cancel-btn-${this._contactId}`
                );

                // Make confirm and cancel buttons visible
                this._target.classList.remove("hidden");

                // Set styling for confirm and cancel buttons
                this._setButtonsElementStyle(confirm, cancel, this._target);
                this._cancleDeleteAction(this._contactId);

                return;
              });
            }
          }
        });
      }
    });
  }
  _cancleDeleteAction(id) {
    this._parentEl.addEventListener("mouseover", (e) => {
      this._cancelDelete = document.querySelector(`.cancel-btn-${id}`);

      if (!this._cancelDelete) return;
      else {
        this._cancelDelete.addEventListener("click", () => {
          this._cancelDeleteContainer = document.querySelector(
            `.delete-contact-container-${id}`
          );

          this._cancelDeleteContainer.classList.add("hidden");
          return;
        });
        return;
      }
      return;
    });
  }
  _setButtonsElementStyle(confirm, cancel, target) {
    confirm.addEventListener("mouseover", () => {
      confirm.style.transform = "scale(1.1)";
    });
    confirm.addEventListener("mouseout", () => {
      confirm.style.transform = "scale(1)";
    });

    cancel.addEventListener("mouseover", () => {
      cancel.style.transform = "scale(1.1)";
    });
    cancel.addEventListener("mouseout", () => {
      cancel.style.transform = "scale(1)";
    });

    if (
      !confirm.classList.contains("hidden") ||
      !cancel.classList.contains("hidden")
    ) {
      target.addEventListener("mouseout", () => {
        confirm.classList.add("hidden");
        cancel.classList.add("hidden");
      });
    }

    if (!confirm) return;
    else {
      confirm.style.width = "5rem";
      confirm.style.color = "#fff";
      confirm.style.height = "3.5rem";
      confirm.style.borderRadius = "0.5rem";
      confirm.style.boxShadow = "2px 3px 5px rgba(0, 0, 0, 0.25)";
      confirm.style.border = "1px solid var(--color-accent)";
      confirm.style.backgroundColor = "var(--color-accent)";
    }
    if (!cancel) return;
    else {
      cancel.style.width = "5rem";
      cancel.style.color = "#fff";
      cancel.style.height = "3.5rem";
      cancel.style.borderRadius = "0.5rem";
      cancel.style.boxShadow = "2px 3px 5px rgba(0, 0, 0, 0.25)";
      cancel.style.border = "1px solid var(--color-secondary)";
      cancel.style.backgroundColor = "var(--color-secondary)";
    }
  }
  _setDeleteContactContainerStyle(el) {
    el.style.gap = "1rem";
    el.style.display = "flex";
    el.style.padding = "1.5rem";
    el.style.fontSize = "1rem";
    el.style.position = "relative";
    el.style.alignItems = "center";
    el.style.borderRadius = "0.5rem";
    el.style.justifyContent = "center";
  }

  addHandlerDeleteContact(handler) {
    this._parentEl.addEventListener("mouseover", (e) => {
      this._targetContainer = e.target.closest(`tr`);
      if (!this._targetContainer) return;
      else {
        this._contactId = this._targetContainer.id;
        this._targetEl = document.querySelector(
          `.delete-contact-container-${this._contactId}`
        );
        // handler(this._targetEl.dataset["id"]);
      }
    });
  }
}

export default new DeleteContactView();
