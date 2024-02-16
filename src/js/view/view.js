export default class View {
  _data;
  _contactId;
  _insertedHTML;
  _contactIdList;
  _contactsObject;

  // Display contacts list
  /**
   *
   * @param {object} data object of contacts
   * @param {boolean} condition retrieval of contacts: if successful, true; else, false
   * @param {string} status how contacts data should be processed: load: on load contacts, create: for new contact creation, view: when view existing contacts
   * @param {string} action 'new' used in _getMarkup in newContactView to get contact's ID: empty otherwise
   * @returns
   */
  render(data, condition, status, action) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._setElementsVisibility(condition, status);

    // Pass contacts object to global class fields
    this._contactsObject = data;

    // Get required markup for rendering
    const markup = this._getMarkup(action);
    // Handle display of contact details
    this._setVisibility(markup);

    // Determine visibility of page elements
    this._setElementsVisibility(condition, status);
  }
  // Handles display of contacts' details
  _setVisibility(markup) {
    // Clear the parent element of any content
    this._clear();
    // Insert markup into parent element
    this._parentEl.innerHTML = markup;
  }
  // Handles modal's visibility on keypress of Esc key
  _escKeyPress() {
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
