/* 

    Async:
        - The word “async” before a function means one simple thing: a function always returns a promise. Other values are wrapped in a resolved promise automatically.

        syntax:
            async function test(){
                // return statement is the same as  
                //return Promise.resolve('hello async function')
                return 'hello async function';          
            }


    Await:
        - The word "await" always use inside an async function and block other operation untill the current operation executed.

        syntax:
            async function testAwait(){
                let getName = Promise.resolve('Fahim');
                let name = await getName;
                console.log(`Your name is ${name}`)
            }
*/

console.log("Async-Promise\n------------");
//1.
async function test() {
  // return statement is the same as
  //return Promise.resolve('hello async function')
  return "1. hello async function";
}
console.log(test());

//2.
async function test2() {
  // return statement is the same as
  return Promise.resolve("2. hello async function");
  //return "hello async function";
}
test2().then((val) => console.log(val));


console.log("\nAsync-Await\n--------------");

//async + await
async function testAwait() {
  let getName = Promise.resolve("Fahim");
  let name = await getName;
  console.log(`Your name is ${name}`);
}
testAwait();
 
//async - await
async function testAwait2() {
  let getName = Promise.resolve("Fahim");
  let name = getName;
  console.log(`Your name is ${name}`);
}
testAwait2();
