import newContactView from "./newContactView.js";
import View from "./view.js";
class DisplayView extends View {
  _contactDetails;
  _parentEl = document.querySelector(".new--contact-window");
  _contentEl = document.getElementsByTagName("tr");

  constructor() {
    super();
    this._readEl();
    // this._createContact();
  }

  // Retrieve contacts object
  getThisData(data) {
    this._data = Object.entries(data);
  }
  //  Read the element
  _readEl() {
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        this._contentEl = document.getElementsByTagName("tr");
      }
      this._getContactId(this._contentEl);
    };
  }
  _getContactId(el) {
    Array.from(el).forEach((rec) => {
      rec.addEventListener(
        "click",
        (e) => console.log("Clicked")

        // this._getContactDetails(e.currentTarget.id)
      );
    });
  }
  _getContactDetails(id) {
    for (let i = 0; i < Object.keys(this._data).length; i++) {
      if (this._data[i][0] === id)
        this._contactDetails = this._getMarkup(this._data[i][1]);
      this._clear();
      this._parentEl.innerHTML = this._contactDetails;
      newContactView._setElementsVisibility();
    }
  }
  _getMarkup(user) {
    return `
      <div class="new--profile-container">
        <div class="new--img__container">
          <img src="${
            user.profileImage ? user.profileImage : "/src/img/profile.png"
          }" alt="Profile Image" class="new--profile-img" />
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            name="dialog"
            id="new--dialog"
          />
            <div class="new--add-contact-icon">
              <svg
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                class="new--circle-plus"
                >
                <path
                  d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
                />
              </svg>
            </div>
          </div>
          <div id="new--contact-name">
            <label>${user.prefix === "N/A" ? "" : user.prefix} ${
      user.firstName ? user.firstName : ""
    } ${user.lastName ? user.lastName : ""}</label>
          </div>
        </div>
            
        <!-- NEW USER INFORMATION -->
        <div class="new--personal-info-container">
          <!-- KEY PERSONAL INFORMATION -->
            <div class="personal-info-block pib-email">
            <label id="preview-email-address">
                    ${user.emailAddress ? user.emailAddress : ""}
            </label>
            <label> Email </label>
          </div>
          
          <div class="personal-info-block pib-mobile">
            <label id="preview-mobile-number"> ${
              user.phoneNumber ? user.phoneNumber : ""
            } </label>
            <label> Mobile </label>
          </div>
                
          <div class="personal-info-block pib-website">
            <label id="preview-website"> ${
              user.website ? user.website : ""
            }</label>
            <label> Web address </label>
          </div>
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
            user.facebook ? user.facebook : ""
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
            user.instagram ? user.instagram : ""
          } </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
            alt="twitterx--v1"
          />
          <label id="preview-x"> ${user.x ? user.x : ""} </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/tiktok--v1.png"
            alt="tiktok--v1"
          />
          <label id="preview-tiktok"> ${user.tiktok ? user.tiktok : ""} </label>
        </div>

        <div class="social-handles personal-info-block">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
          <label id="preview-linkedin"> ${
            user.linkedIn ? user.linkedIn : ""
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
            user.pinterest ? user.pinterest : ""
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
            user.youtube ? user.youtube : ""
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
            user.snapchat ? user.snapchat : ""
          } </label>
        </div>
      </div>
    `;
  }
}
export default new DisplayView();
