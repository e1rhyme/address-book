// import contactsView from "./contactsView";

export default class View {
  _data;
  _contactId;
  _insertedHTML;
  _contactIdList;
  _contactsObject;

  // Display contacts list
  render(data, condition, status, id) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._setElementsVisibility(condition, status);

    // Create array of contacts' IDs
    this._contactIdList = Object.entries(data).map((rec) => rec.shift());

    // Pass contacts object to global class fields
    this._contactsObject = data;

    this.getThisData(this._contactsObject, this._contactIdList);

    // Get required markup for rendering
    const markup = this._getMarkup(id);
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
