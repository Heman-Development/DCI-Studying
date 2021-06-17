import { welcomeMsg } from "./script2.js";
//import { printWelcomeMsg, alertWelcomeMsg } from "./functions.js";
import printWelcomeMsg, {alertWelcomeMsg} from "./functions.js";
//IIFE : An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. (MDN)
/*

(function(arguments) {
    // body
})()


IIFE function contains two major parts:
    1-  anonymous function with lexical scope enclosed within the Grouping Operator (). 
        *** This prevents accessing variables within the IIFE idiom as well as polluting the global scope. ***
    2- The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
*/

//Example:
/*
    - The function becomes a function expression which is immediately executed. 
    - The variable within the expression can not be accessed from outside it.
 */

(function (Msg) {
  let message = Msg;
  console.log(message);
  const innerFunc = () => {
    console.log(`Old message value: ${message}`);
    message = "message is overwrite with innerFunc";
    console.log(message);
  };
  innerFunc();
})("Hello world JS Modules");

// message variable and innerFunc() are defined in the IFFE function so it is not accessible outside
//console.log(message);     //this returns message is not defined

/* 
    - function declaration: when the function definition starts with keyword `function`
        function func(){}
    - function expression: when the function definition starts with something other than `function` keyword such as `(` or let variable =
    (function(){})()        or  const myfunc = ()=>{}

*/



/* 
What is a module?
A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives export and import to interchange functionality, call functions of one module from another one:

- export:  keyword labels variables and functions that should be accessible from outside the current module.
- import: allows the import of functionality from other modules.


Name Export:
With named exports, one can have multiple named exports per file. Then import the specific exports they want surrounded in braces. The name of imported module has to be the same as the name of the exported module.


Default Export:
One can have only one default export per file. When we import we have to specify a name and import


*/

console.log(welcomeMsg);

printWelcomeMsg();
alertWelcomeMsg()