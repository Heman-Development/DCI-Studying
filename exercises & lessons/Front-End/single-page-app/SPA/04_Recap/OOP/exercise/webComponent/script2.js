/* 

content of a web component
    1- HTML element: custom HTML markups that can be created by programmers
    2- Shadow DOM: beside DOM tree that contains a tree of html elements shadow dom make a tree of html element for component
    3- Template: helps us to create the content of web component
*/
/* let template = document.createElement('template');
template.innerHTML = `<span><strong>Hello</strong> world!</span>`



class Paragraph extends HTMLElement{
    constructor() {
        super();
        this.innerText = 'Hello world'
    }
}

window.customElements.define('custom-p', Paragraph); */



//create a post
let postTemplate = document.createElement('template');
postTemplate.innerHTML = `
<style>div{border:solid 1px black}</style>
                        <div>
                            <h3>${this.header}</h3>
                            <p>${this.content}</p>
                            <small>01-01-2021</small>
                        </div>
`

class Post extends HTMLElement{
    constructor() {
        super();
        this.header = this.getAttribute('header');
        this.content = this.getAttribute('content');
        //shadow dom
        this.attachShadow({mode:'open'})
        this.shadowRoot.innerHTML = `
<style>div{border:solid 1px black}</style>
                        <div>
                            <h3>${this.header}</h3>
                            <p>${this.content}</p>
                            <small>01-01-2021</small>
                        </div>
`;
        console.log(this.header);
    }


}

window.customElements.define('post-elem', Post);