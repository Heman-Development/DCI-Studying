

class CustomElement extends HTMLElement {
  //constructor execute even before the customElement be created
  constructor() {
    super();
    console.log("constructor");
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = "<div>custom element</div>";
  }

  connectedCallback() {
    //when the component add to the dom
      console.log("connectedCallback");
      this.shadowRoot.querySelector('div').addEventListener('click', ()=> {
          console.log('div is clicked')
      })
  }

  // call on remove the element from the dom
  disconnectedCallback() {
    console.log("disconnectedCallback");
  }

  static get observedAttributes() {
    return ['cid'];
  }

  //call on change of attributes values
  attributeChangedCallback(name, oldValue, newValue) {
    console.log("attributeChangeCallback");
  }
}

window.customElements.define('custom-element', CustomElement);

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    let celement = document.querySelector('custom-element');
    document.body.removeChild(celement);
})
let changeColorbtn = document.querySelector('#changeColor');
changeColorbtn.addEventListener('click', () => {
    let celement = document.querySelector('custom-element');
    celement.setAttribute('cid', 'new value');
})