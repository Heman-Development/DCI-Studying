/* 
  -> No matter how great we are at programming, sometimes our scripts have errors. They may occur because of our mistakes, an
  unexpected user input, an erroneous server response, and for a thousand other reasons.
  
  -> Usually, a script “dies” (immediately stops) in case of an error, printing it to console.
  But there’s a syntax construct try...catch that allows us to “catch” errors so the script can, instead of dying, do something more reasonable.


  try..catch do the following:
      1- First, the code in try {...} is executed.
      2- If there were no errors, then catch (err) is ignored: the execution reaches the end of try and goes on, skipping catch.
      3- If an error occurs, then the try execution is stopped, and control flows to the beginning of catch (err). The err variable (we can use any name for it) will contain an error object with details about what happened.


  - Syntax of try...catch

      try {
        //your javascript code here
        console.log(myVar);
      } catch (error) {
        //handle the error here
        console.log(error.message);
      } finally {
        //this block always will execute
        console.log("finally block");
      }

 */

//example:

function JSON2OBJ(json) {
  //If we use the JSON.parse() with a wrong JSON object here, it will stop the execution of js
  //JSON.parse(user);
  try {
    // here if any error happens will be catched by catch block
    let userObj = JSON.parse(user);
    return userObj;
  } catch (error) {
    return error.message;
  }
}

let user = `{"name" : "fahim", "age" : 36, "isMarried" : true,}`;
JSON2OBJ(user);
console.log("*****After JSON2OBJ function*****");
//#########################
/* 
throw statement: The throw statement allows you to create a custom error.
Technically you can throw an exception (throw an error)

Synatx: throw errorInstance;

*/

//Example:
function strLength(str) {
  let myCustomError = new ReferenceError(`Please pass a valid string`);
  if (typeof str != "string") {
    throw myCustomError;
  } else {
    return str.length;
  }
}

let fullName = "fahim";
console.log(strLength(fullName));
console.log("*****After strLength function*****");
