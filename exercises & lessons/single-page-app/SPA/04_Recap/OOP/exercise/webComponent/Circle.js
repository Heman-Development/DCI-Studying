//template
let template = document.createElement("template");
template.innerHTML = `<style>*{color: blue}</style><span>Template Content</span>`;

//custom html element
class Paragraph extends HTMLElement {
  constructor() {
    super();
    // this.innerText = 'Hello world!'

    //shadow dom
    this.attachShadow({ mode: "open" });
    // this.shadowRoot.innerHTML = 'Paragraph Cotent'
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("span").style.color =
      this.getAttribute("color");
  }
}

window.customElements.define("custom-p", Paragraph);

let circleTemp = document.createElement("template");
circleTemp.innerHTML = `<style>div{background-color: brown}</style><div></div>`;

//custom html element
class Circle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(circleTemp.content.cloneNode(true));
    this.shadowRoot.querySelector(
      "div"
    ).style.border = `solid ${this.getAttribute("color")} 1px`;
    this.shadowRoot.querySelector("div").style.width =
      this.getAttribute("radius");
    this.shadowRoot.querySelector("div").style.height =
      this.getAttribute("radius");
    this.shadowRoot.querySelector("div").style.borderRadius = "50%";

    //}
  }
}

window.customElements.define("circle-elem", Circle);
