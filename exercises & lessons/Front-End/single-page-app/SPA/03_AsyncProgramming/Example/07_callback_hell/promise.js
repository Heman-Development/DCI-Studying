/* using callback instead of promise */

let age = 15;
function checkAdults(cb, ecb) {
  console.log("callback approach\n-------");
  if (age >= 18) {
    console.log("callback cb");
    cb(age);
  } else {
    console.log("callback ecb");
    ecb(new Error("You are not adult"));
  }
}

checkAdults(
  (ageValue) => {
    console.log("You are allowed to access our website.");
    console.log('you are', ageValue);
  },
  (error) => {
    console.log(error.message);
  }
);

//promise format of above code
function adultChecker(age) {
  console.log("\npromise approach\n-------");
  return new Promise(function (resolve, reject) {
    if (age >= 18) {
      console.log("promise resolve:");
      resolve(age);
    } else {
      console.log("promise reject:");
      reject(new Error("You are not adult"));
    }
  });
}

//consum promise
adultChecker(10)
  .then((value) => console.log("You are allowed to access our website"))
  .catch((err) => {
    console.log(err.message);
  });


  /* 
  ****Note:
    These two statement are doing the same thing
    1-  new Promise(function(resolve, reject){ resolve(value)})
    2-  Promise.resolve(value)
  
  */
