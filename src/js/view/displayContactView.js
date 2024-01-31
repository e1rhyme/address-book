import View from "./view.js";
import newContactView from "./newContactView.js";
import manageContactView from "./manageContactView.js";

class DisplayContactView extends View {
  _parentEl = document.querySelector(".new--contact-window");
  _contentEl;
  _contactDetails;

  constructor() {
    super();
    this._readEl();
  }

  // Retrieve contacts object
  getThisData(data) {
    if (!Array.isArray(data)) this._data = Object.entries(data);
  }
  //  Read clicked element
  _readEl() {
    this._contentEl = document.querySelector(".contacts");

    this._getContactId(this._contentEl);
  }
  // Extract id of clicked element
  _getContactId(el) {
    el.addEventListener("click", (e) => {
      const targetEl = e.target.closest("tr");

      this._getContactDetails(targetEl.id);
    });
  }
  // Retrieve user details based on selected id
  _getContactDetails(id) {
    for (let i = 0; i < Object.keys(this._data).length; i++) {
      if (this._data[i][0] === id.toString()) {
        // Parse contact details to generate markup
        this._contactDetails = this._getMarkup(this._data[i][1]);
        manageContactView._editContact(id, this._data[i][1]);
      }
      this._setVisibility(this._contactDetails, false, "view");
      newContactView._setElementsVisibility();
    }
  }
  _getMarkup(profile) {
    console.log(profile);
    return `
      <button id="btn--edit">
        <svg id="svg-edit--icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
        >
          <path
            d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z"
          />
        </svg>
      </button>
      <div class="hover-text hidden">
        <span class="tooltip-text fade" id="bottom">Click to edit contact</span>
      </div>
      <div class="new--profile-container">
        <div class="new--img__container">
          <img src="${
            profile.profileImage ? profile.profileImage : "/src/img/profile.png"
          }" alt="Profile Image" class="new--profile-img" />
          </div>
          <div id="new--contact-name">
            <label>${profile.prefix === "N/A" ? "" : profile.prefix} ${
      profile.firstName === "N/A" ? "" : profile.firstName
    } ${profile.middleName === "N/A" ? "" : profile.middleName} ${
      profile.lastName === "N/A" ? "" : profile.lastName
    }
            </label>
          </div>
        </div>
            
        <!-- NEW USER INFORMATION -->
        <div class="new--personal-info-container">
          <!-- KEY PERSONAL INFORMATION -->
            <div class="personal-info-block pib-email">
            <label id="preview-email-address">
                    ${profile.emailAddress ? profile.emailAddress : ""}
            </label>
            <label> Email </label>
          </div>
          
          <div class="personal-info-block pib-mobile">
            <label id="preview-mobile-number"> ${
              profile.phoneNumber ? profile.phoneNumber : ""
            } </label>
            <label> Mobile </label>
          </div>
                
          <div class="personal-info-block pib-website">
            <label id="preview-website"> ${
              profile.website ? profile.website : ""
            }</label>
            <label> Web address </label>
          </div>
        </div>

        <div class="personal-info-block pib-dob">
            <label id="preview-dob">
                    ${profile.dateOfBirth ? profile.dateOfBirth : ""}
            </label>
            <label> Birthday </label>
          </div>
            
        <div class="new--social-handles-header">
          <h2>Social Handles</h2>
        </div>
            
        <div class="new--social-handles">
          <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook"
          />
          <label id="preview-facebook"> ${
            profile.facebook ? profile.facebook : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/48/instagram-new.png"
            alt="instagram-new"
          />
          <label id="preview-instagram"> ${
            profile.instagram ? profile.instagram : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
            alt="twitterx--v1"
          />
          <label id="preview-x"> ${profile.x ? profile.x : ""} </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/tiktok--v1.png"
            alt="tiktok--v1"
          />
          <label id="preview-tiktok"> ${
            profile.tiktok ? profile.tiktok : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
          <label id="preview-linkedin"> ${
            profile.linkedIn ? profile.linkedIn : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/pinterest--v1.png"
            alt="pinterest--v1"
          />
          <label id="preview-pinterest"> ${
            profile.pinterest ? profile.pinterest : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="youtube-play"
          />
          <label id="preview-youtube"> ${
            profile.youtube ? profile.youtube : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/48/snapchat.png"
            alt="snapchat"
          />
          <label id="preview-snapchat"> ${
            profile.snapchat ? profile.snapchat : ""
          } </label>
        </div>
      </div>
    `;
  }
}
export default new DisplayContactView();
//
