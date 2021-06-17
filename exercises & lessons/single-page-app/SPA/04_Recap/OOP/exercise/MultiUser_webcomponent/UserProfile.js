class UserProfile extends HTMLElement {
  constructor() {
    super();
      this.attachShadow({ mode: "open" });
      console.log(this.shadowRoot);
  }

  set profile(user) {
    this.shadowRoot.innerHTML = `
            <style>
    div#profile{
        width: 250px;
        border-radius: 2%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 2px solid #B9B7BD;
        padding: 10px;
        margin-bottom: 20px;
        margin-right: 20px;
        background-color: #EEEDE7;
        color: #333333

;
    }

    img{
        border-radius: 50%;
        margin-bottom: 10px;
        box-shadow: 0px 4px #000b0080;
        aspect-ratio: 10:5;
    }

    span{
        font-weight: 500;
        margin-bottom: 10px;
        color: #666666;
    }

    hr{
        width: 60%;
    }
    
    h3{
        color: #444444
    }
    div#details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
    }
</style>

<div id="profile">
    
    <img src="${user.picture.large}" alt="profile-pic">
    <h3 id="fullname">${user.name.title}.${user.name.last}, ${user.name.first}</h3>
    <hr />
    <button>Hide</button>
    <div id="details">
    Birth-Date: <span id="dob">${user.dob.date}</span>
    Email: <span id="email">${user.email}</span>
    Address: <span id="address">${user.location.city}-${user.location.country}</span>
    Phone: <span id="phone">${user.phone}</span>
    </div>

</div>
`;
  }

  connectedCallback() {
    let btn = this.shadowRoot.querySelector("button");
    btn.addEventListener("click", (e) => {
      let details = this.shadowRoot.querySelector("div#details");
      if (e.target.innerText == "Hide") {
        details.style.display = "none";
        e.target.innerText = "Show";
      } else {
        details.style.display = "flex";
        e.target.innerText = "Hide";
      }
    });
  }

   disconnectedCallback() {
    console.log("one component removed");
  } 
}

window.customElements.define("user-profile", UserProfile);
