
/* ############## Introduction ################## */

// window is the main object of every browser window
// it's only availbe in browser not in node
// it is global, so it's available everywhere in JS code that will execute in browser
// it has some properties, methods and child objects such as nsole.log(window);

// document object is a child of window object
// you can access it using window.document or document
// it's also global and accessbile everywhere in browser
// it contains all content of html file (tags)
// the content are in the form of a tree
// every global variable in JS is part of window object as well
let lastName = "Ahmadi";

// window.alert() or alert() is function to display a message to the user
function testAlert() {
  window.alert("Your data saved successfully!");
  //alternative
  //alert("Your data saved successfully!");
}

function getName() {
  // window.prompt() or prompt() function to get input data from user
  // return value of prompt() is a string that given by user
  // return value is always a string even if the user enter digits
  let name = window.prompt("Please write your name here!");
  console.log(`Hello ${name}`);
}

function getAge() {
  // after getting the input from user, it's possible to evaluate it. (type, size, ...)
  // following example alert different messages depend on type of input data

  let age = window.prompt("Please enter your age");
  // isNaN(number) is JS function to evaluate the characters of given number
  // if it contains only digits it will return false otherwise returns true
  // example:
  //    isNaN(123)  return false
  //    isNaN('123')   return false
  //    isNaN('Isabel')   return true

  if (!isNaN(age)) {
    alert(`you have ${age} years old.`);
  } else {
    alert("Please enter a number here.");
  }
}

//second example
// Compare the given values for username and password with users array
// if you found the user with matched username and password, display a welcome message with an alert

// data source for registered users
const users = [
  {
    username: "fahim",
    password: "123",
  },
  {
    username: "heydar",
    password: "456",
  },
];

// checkLogin() function to compare the given username and password with data-source content
function checkLogin() {
  // read input data (username, password) given by user
  let inputUser = prompt("Please enter your username");
  let inputPassword = prompt("Please enter your password");

  // looking for at least one matching element
  const isUserRegistered = users.some((user) => {
    return user.username == inputUser && user.password == inputPassword;
  });

  // alert different messages depend on matching process
  // turnary operator to check the condition
  isUserRegistered
    ? alert(`Welcome ${inputUser}. Logged In successfully`)
    : alert("Username or password is not correct please try again.");
}


/* ############## DOM #################### */
//Selecting Elements
//graby by ID
function testDomMethods() {
  // it doesn't matter where the element is in the html document, it will be grabbed immediately
  let grabbedElement = document.getElementById("getNameBtn");

  // to select first matching html node using css selectors( #, ., TagName, combination of css selectors)
  let btn = document.querySelector(".btn");


  // to select all matching html nodes using css selectors
  // return value of querySelectorAll() is a Node List (an array of nodes)
  // for accessing every element of the list, you need to mention the index number
  let allParagraphs = document.querySelectorAll('p');


  // accessing the content between opening and closing tags
  // innerText is a property of every element in node tree inside document object, that contains only text.
  let firstParagraphText = document.querySelector('p').innerText;

  // innerHTML is a propperty of every element in node tree inside document object, 
  // that contains all child nodes including html elements and their text
  let firstDivContents = document.querySelector('div').innerHTML;

  alert(`first paragraph's text: \n ${firstParagraphText}`);
  alert(`first div's content: \n ${firstDivContents}`);

  // to assign a new text or content to a grabbed element
  let firstParagraph = document.querySelector('p');
  firstParagraph.innerText = 'New Text'

  let firstDiv = document.querySelector('div');
  firstDiv.innerHTML += '<p><span class="text-danger">New HTML content</span></p>'


  // change style of grabbed element using DOM
  let par = document.querySelector("p");  // step1. grab the element
  par.style.color = "tomato";             // step2. use .style.styleProp to change the style


  // selecting one element among list of nodes
  let par2 = document.querySelectorAll("p")[1].innerHTML;
  alert(`Second paragraph: \n ${par2}`)
}
