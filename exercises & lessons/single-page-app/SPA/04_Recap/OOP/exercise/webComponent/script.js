
//---------------
let profiletemplate = document.createElement("template");
profiletemplate.innerHTML = `
                        <div class="card">
                            <img src="" alt="John">
                            <h1>test</h1>
                            <p id="address">CEO & Founder, Example</p>
                            <p id="email">Harvard University</p>
                            <a href="#"><i class="fa fa-dribbble"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <p><button>Contact</button></p>
                        </div>

<style>
div{
    border: solid 5px skyblue;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: lightgray;
}
img{
    width: 100px;
    border-radius: 5%;
}
<style/>
            `;

class Profile extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(profiletemplate.content.cloneNode(true));
      let data = this.getAttribute('data');


      console.log(data);
      
  }

  connectedCallback() {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((jres) => {
          let fetchedData = jres.results[0];
          prof.data = fetchedData;
          console.log(prof);

          /* img */
          this.shadowRoot.querySelector('img').src = fetchedData.picture.large;

          /* address */
          const { postcode, city, state, country } = fetchedData.location;
          this.shadowRoot.querySelector('#address').innerText = `${city}, ${state}, ${country}`

          /* fullname */
        this.shadowRoot.querySelector(
          "h1"
        ).innerText = `${fetchedData.name.first} ${fetchedData.name.last}`;
          
          /* email */
          this.shadowRoot.querySelector('#email').innerText = fetchedData.email
        
      });
  }
}

window.customElements.define("profile-temp", Profile);
let root = document.getElementById("root");
let prof = document.createElement("profile-temp");
console.log(prof);
 