/* 

INTRODUCTION:
    
    - The REQUEST/RESPONSE cycle:
        Is one of the basic methods for communication between computers in a network.
        Computer1 sends a request for some data to computer2
        Computer2 sends a response(which is a Promise instance) to that request.
        *- More specifically, it is a message exchange pattern.


    - BLOCKING CODE:
        Refers to operations that block further execution until that operation finishes
        op1  ->|  op2
    - NONE BLOCKING CODE:
        Refers to code that doesn't block execution.
        op1   ->    op2
*/

//blocking (Synchronous) code example
console.log("operation 1");
console.log("operation 2");
console.log("operation 3");

console.log("===========\n");

//none-blocking (Asynchronous) code example
console.log("oepration 1");
setTimeout(() => {
  console.log("operation 2");
}, 1000);
console.log("operation 3");
console.log("operation 4");
console.log("operation 5");

/* 
PROMISE:
    - A Promise is a JavaScript object that links producing code and consuming code
    - Producing-Code: The code that can take some time to be executed
    - Consuming-Code: The code that must wait for the result of Producing-code



    Analogy:
        Imagine that you’re a top singer, and fans ask day and night for your upcoming song. To get some relief, you promise to send it to them when it’s published. 
        
        You give your fans a list. They can fill in their email addresses, so that when the song becomes available, all subscribed parties instantly receive it. And even if something goes very wrong, say, a fire in the studio, so that you can’t publish the song, they will still be notified.
        
        Everyone is happy: you, because the people don’t crowd you anymore, and fans, because they won’t miss the song. 
        
        This is a real-life analogy for things we often have in programming: 

            1. A “producing code” that does something and takes time. For instance, some code that loads the data over a network. That’s a “singer”.
            2. A “consuming code” that wants the result of the “producing code” once it’s ready. Many functions may need that result. These are the “fans”.
            3. A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. In terms of our analogy: this is the “subscription list
            
        The “producing code” takes whatever time it needs to produce the promised result, and the “promise” makes that result available to all of the subscribed code when it’s ready

        Syntax:
        let promise = new Promise(function(resolve, reject) {
            // executor (the producing code, "singer")
        });


        -* : When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

            resolve(value) — 
                if the job is finished successfully, with result value.
            reject(error) — 
                if an error has occurred, error is the error object.


    Producer Code:
        - resolve
        - reject
    
    Consumer Code:
        - then
        - catch
        - finally
        
*/

//Example:
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
  (result) => console.log(result), // shows "done!" after 1 second
  (error) => console.log(error) // doesn't run
);

//Example2:

//producing code
let promise2 = new Promise(function (resolve, reject) {
  let x = false;

  if (x) {
    resolve("The condition is true");
  } else {
    reject(new Error("The condition was false"));
  }
});

//consuming code
promise2
  .then((resolveValue) => {
    console.log(resolveValue);
  })
  .catch((rejectValue) => {
    console.log(rejectValue.message);
  })
  .finally(() => {
    console.log("finally block");
  });





