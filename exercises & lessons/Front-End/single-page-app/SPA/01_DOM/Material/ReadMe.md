### Javascript introduction

- JavaScript was initially created to “make web pages alive”.
- Scripts are provided and executed as plain text. They don’t need special preparation or compilation to run.
- it initially had another name: “LiveScript”. But Java was very popular at that time, so they call it Javascript. But as it evolved, JavaScript became a fully independent language with its own specification called ECMAScript , and now it has no relation to Java at all.

#### ECMAscript

ECMAScript is a scripting language specification on which JavaScript is based. Ecma International is in charge of standardizing [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript#ES2020).
![Ecmascript Versions](https://trello-attachments.s3.amazonaws.com/6062e82136d98c1a0736d519/6065b2b39dbbc23e670fa5e4/8b4dc0a6b1d4408621495e7fa84576c4/Screenshot_2021-04-12_at_10.33.55.png)

#### Javascript Engine

> _"A JavaScript engine is a computer program that executes JavaScript (JS) code"_

The browser has an embedded engine sometimes called a “JavaScript virtual machine”.

Different engines have different “codenames”.
For example:

- **V8** in Chrome and Opera.
- **SpiderMonkey** in Firefox.
- **Chakra** in IE, Microsoft Edge
- **Nitro** and **SquirrelFish** for Safari
- etc...

#### Add Javascript to HTML

- Using `<script>` Tag:
  `<script> /* your javascript code comes here */ </script>`
- Using external JS:
  `<script src="/file/path" />`

---

![Window Object](https://trello-attachments.s3.amazonaws.com/6062e82136d98c1a0736d519/60741b37f926145f64025afd/7237b239c1582167d71470106afdbcb3/JavaScript-Window-Objects.png)

#### The `window` object:

- ###### Host Object vs Native Objects
  - **Host Object:** _Supplied by a certain environment. such as `window` object that does exist in browser but not in Nodejs_ .
  - **Native Objects:** _Standard built-in Objects supplied by Javascript itself. such as `Date, Math, String`_.
    >
- ###### `window` Object scope and contents
  - `window` object is global and contains many information about browser and document which is open and in addition it contains all global variables
  - User input and messages with window: `window.prompt()` and `window.alert()`
  - The `document` object: The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.
  ***

#### What is DOM?

The **_Document Object Model (DOM)_** connects web pages to scripts or programming languages by representing the structure of a document.

The DOM represents a document with a logical tree. Each branch of the tree ends in a **_node_**, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.

The built in DOM apis in the browser is the first stepping stone in creating a truly dynamic experience.

In this sub module, you will be introduced with:

1. writing JavaScript for the browser environment,
2. use it to explore and manipulate the document structure.
3. Making the web interactive, by attaching functionality and react to actions the user might perform on our page.

#### DOM Tree

According to the Document Object Model (DOM), every HTML tag is an **object**. Nested tags are **“children”** of the enclosing one. The text inside a tag is an object as well. All these objects are accessible using JavaScript, and we can use them to modify the page. For example:

> `document.body` is the object, representing the `<body>` tag.

![DOM](https://2r4s9p1yi1fa2jd7j43zph8r-wpengine.netdna-ssl.com/files/2017/09/ezgif-2-2688553063.gif)

---

### How to use DOM in JS?

We can use DOM for different purposes which are mentioned at below:

1. **_Selecting_** the DOM Elements:
   To grab the the html elements following methods and properties of document object are helpful.

   - Selecting elements the old-way by ID

     > `document.getElementById(<id string>)`

   - Selecting by CSS query: To grab first element in the list of html elements with the given css style.

     > `document.querySelector(<selector string>)`

   - Getting more than one element: To grab all elements with the given css style.

     > `document.querySelectorAll(<selector string>)`

   - Element style: Changing css styles
     > `HTMLElement.style`

2. **_Manipulating_** the DOM tree

   - Manipulating classes:
     The `Element.classList` is a read-only property that returns a live **_DOMTokenList_** collection of the class attributes of the element. This can then be used to manipulate the class list.
     The DOMTokenList itself is read-only, although you can modify it using the `add()`, `remove()` and `toggle()` methods.

     > `let elementClassNames = element.classList`

   - Changing the text inside an element using `HTMLElement.innerText` property
   - Changing the HTML content: The `Element.innerHTML` property
   - Security risks:

   `document.write()` and script injection

   - Creating Elements: `document.createElement(<tag name>)`
   - Adding elements to the page: `Element.appendChild(<Element object>)`

3. **_Traversing_** : Jumping from one element to its relative

- Node vs. Element:

  - There are three type of Nodes:
    1. Element Node ==>  \<p>\</p>
    2. Text Node    ==> "text" or carriage return
    3. Comment Node ==> /* comments */

  - Node properties:
    1. Node type
        Node type is a number that define the type of node. example:
              1. ELEMENT NODE
              3. TEXT NODE
              8. COMMENT NODE
              9. DOCUMENT NODE
              10. DOCUMENT TYPE NODE (<!DOCTYPE html>)
              11. DOCUMENT FRAGMENT NODE

        ***Note***: Node Type 2 (Attribute Node) and Type 4 (CData) are deprecated.

  > Comparing `Node.previousSibling` and `Element.previousElementSibling`
- Getting an element's closest parent: 
    > `Element.closest(<selector string>)`
- Testing an element against a selector: `Element.matches(<selector string>)`
- Getting all children of an element: `ParentNode.children`
- Selecting specific children: `ParentNode.querySelector(<selector string>)`
- Finding more traversal techniques: MDN "
  Events: User Events (interaction) and Browser Events (loading, etc...)
  "Listening:
- Higher order functions I recap:
  functions that accept function values (callbacks)
- Listening to user actions:
  `EventTarget.addEventListener(<namespace>, <callback>)`
- Mouse Events: `click`, `mouseenter`, `mouseleave`
- Removing event listeners:
  `EventTarget.removeEventListener(<namespace>, <function reference>)`
- Listening to browser events: `DOMContentLoaded` event
- Finding more events on MDN"
  "The Event Object:
- Keyboard Events: `keydown`, `keyup`
- The event object properties: A console example
- Getting the target of the event: `Event.target`
- Form events: `submit`, `reset`, `Event.preventDefault()`
- Getting form values on submit:
  `target.elements[<id>]`, `target.elements[<name>]`, `Element.value`"
  "Propagation, Delegation: <ul>, <li> examples
- Event bubbling concept:
  ""Events bubble from innermost to outermost elements""
- Common problems with bubbling: `Event.stopPropagation()` as solution
- Different targets: `Event.target` vs. `Event.currentTarget`
- Event listener issues: Performance impact, adding events to dynamic lists
- Event delegation solution: Delegating events from parent to child
- Reversing propagation:
  The `useCapture` option in `addEventListener()`,
  `DOMContentLoaded` use case

---



### Resources

The following section contains material to use during the lectures and to share with the class:

|Resources      |      Internal	    |       External  	|       Articles  	|       Video Tutorial  	|
|---	        |---	            |---		        |---		        |---		        |
|1  	       	| 	            |[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)   	        	|[why you should know DOM](https://www.freecodecamp.org/news/whats-the-document-object-model-and-why-you-should-know-how-to-use-it-1a2d0bc5429d/)               |[DOM](https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V)                   |
|2  	       	| 	            |[DOM](https://www.w3.org/TR/WD-DOM/introduction.html)   	        	|[DOM (Document Object Model)](https://www.geeksforgeeks.org/dom-document-object-model/)               |[DOM](https://www.youtube.com/watch?v=t3CWlfZUvL8)                   |
|3  	       	| 	            |[DOM](https://bitsofco.de/what-exactly-is-the-dom/)   	        	|[DOM (Document Object Model)](https://www.computerhope.com/jargon/d/dom.htm)               |[Document Object Model](https://www.youtube.com/watch?v=8-q21K0w2WE)                   |
|4  	       	| 	            |[DOM getElement*](https://javascript.info/searching-elements-dom)   	        	|[How to access Elements in DOM](https://www.digitalocean.com/community/tutorials/how-to-access-elements-in-the-dom)               |[Get Element by ID](https://www.youtube.com/watch?v=t90K6HExEJo&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=2)                   |
|5  	       	| 	            |[DOM getElement*](https://attacomsian.com/blog/getting-dom-elements-javascript)   	        	|[6 Ways to select HTML Elements](https://bydavidlange.com/6-ways-to-select-html-elements-with-javascript)               |[Then Query Selector](https://www.youtube.com/watch?v=JlgLDfINXvY&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=4)                   |
|6  	       	| 	            |[DOM Events](https://developer.cdn.mozilla.net/de/docs/Web/Events)   	        	|[DOM events in JavaScript](https://medium.com/@royanimesh2211/dom-events-in-javascript-8c646cceb1ed)               |[Events](https://www.youtube.com/watch?v=ndz6iH6o1ms&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=9)                   |
|7  	       	| 	            |[List of DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)   	        	|[JavaScript Fundamentals: Understanding Events](https://timothyrobards.medium.com/javascript-fundamentals-understanding-events-4def8c47e313)               |[Events](https://www.youtube.com/watch?v=0fy9TCcX8Uc)                   |
|8 	       	| 	            |[Handling form data](https://eloquentjavascript.net/2nd_edition/18_forms.html)   	        	|[Interacting with Forms in DOM](https://www.javascripttutorial.net/javascript-dom/javascript-form/)               |[Interacting with Forms](https://www.youtube.com/watch?v=n4B7vY9SIds&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=11)                   |
|9 	       	| 	            |[Event Bubbling and Capturing](https://javascript.info/bubbling-and-capturing)   	        	|[Event Bubbling and Capturing](https://flaviocopes.com/javascript-event-bubbling-capturing/)               |[Event Bubbling](https://www.youtube.com/watch?v=SqQZ8SttQsI&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=10)                   |
|10 	       	| 	            |[Event Bubbling and Capturing](https://dev.to/clickys/bubble-vs-capture--3b19)   	        	|[Event Bubbling and Capturing](https://javascript.plainenglish.io/event-bubbling-and-capturing-in-javascript-cdc6bf9788bb)               |[Bubbling and Capturing](https://www.youtube.com/watch?v=Q6HAJ6bz7bY&list=PLVvjrrRCBy2JS8__NYlhPeaoNz2p1aPEN&index=16)                   |
|11 	       	| 	            |[Event Delegation](https://dmitripavlutin.com/javascript-event-delegation/)   	        	|[Event Bubbling and Delegation](https://programmingwithmosh.com/javascript/javascript-event-bubbling-and-event-delegation/)               |[Event Delegation](https://www.youtube.com/watch?v=pKzf80F3O0U&list=PLVvjrrRCBy2JS8__NYlhPeaoNz2p1aPEN&index=25)                   |
