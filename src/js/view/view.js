export default class View {
  _data;
  _contactId;
  _insertedHTML;

  // Display contacts list
  render(data, condition, status) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._setElementsVisibility(condition, status);

    // Pass contacts details to global field
    this._data = data;

    // Extract the id of the creted user(s)
    this._contactId = Object.entries(this._data).map((rec) => rec.shift());

    // Convert the object to an array
    this._data = Object.entries(this._data).map((rec) => rec);
    // If new contact is being rendered (single object) or just one contact object exists in local storage
    if (!condition || Object.keys(this._data).length === 1)
      this._data = this._data.shift().slice(1);

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
