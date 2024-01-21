export default class View {
  _data;
  _contactId;

  // Display contacts list
  render(data, condition, status) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._setElementsVisibility(condition, status);

    // Convert the object to an array and slice the first index out; index 0 has no value
    // this._data = Object.entries(data)[0].slice(1);
    this._contactId = Object.entries(data).map((rec) => rec.shift());

    this._data = Object.entries(data).map((rec) => rec.slice(1));
    // If new contact is being rendered (single object) or just one contact object exists in local storage
    if (!condition || Object.keys(this._data).length === 1)
      this._data = this._data.slice(-1);

    // Get required markup for rendering
    const markup = this._getMarkup();
    // Clear the parent element of any content
    this._clear();
    // Insert markup into parent element
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
    // Determine visibility of page elements
    this._setElementsVisibility(condition, status);
  }
  // Private method(): Clear parent element content
  _clear() {
    this._parentEl.innerHTML = "";
  }
}
