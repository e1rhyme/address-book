export default class View {
  _data;
  _contactId;
  _insertedHTML;
  _fullContactDetails;

  // Display contacts list
  render(data, condition, status) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._setElementsVisibility(condition, status);

    // Create array of contacts' IDs
    this._contactId = Object.entries(data).map((rec) => rec.shift());
    // this._contactId = Object.keys(data).slice(Object.keys(data).length - 1);

    // Backup of raw contact details; required at displayContactView
    this._fullContactDetails = data;

    // Convert the object to an array and slice the first index out; index 0 has no value
    // Remove userID from array
    this._data = Object.entries(data).map((rec) => rec.slice(1));
    // If new contact is being rendered (single object) or just one contact object exists in local storage
    if (!condition || Object.keys(this._data).length === 1)
      this._data = this._data.slice(-1);

    // Get required markup for rendering
    const markup = this._getMarkup();

    // Handle display of contact details
    this._setVisibility(markup);

    // Determine visibility of page elements
    this._setElementsVisibility(condition, status);
  }
  _setVisibility(markup) {
    // Clear the parent element of any content
    this._clear();
    // Insert markup into parent element
    this._parentEl.innerHTML = markup;
  }
  _escKeyPress(option) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this._newContactContainer.classList.add("hidden");
        this._parentEl.classList.add("hidden");
        this._newOverlay.classList.add("hidden");
      }
    });
  }
  // Private method(): Clear parent element content
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
