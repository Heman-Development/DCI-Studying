import './style/style.scss';


console.log('Hello World!');


async function fetchData() {
  let url = "https://www.randomuser.me/api/?results=5";
  //promise1
  let response = await fetch(url); //promise1
  let jsonData =  await response.json(); //promise2 (because return value of json() method is also a promise)

  console.log(jsonData.results);
  //promise2
  let value =await myPromise(1); //promise3 (because return value of myPromise() is a promise as well)
  console.log(value);
}

function myPromise(val) {
  return new Promise(function (resolve, reject) {
    // body
    if (val) {
      resolve("resolved");
    } else {
      reject("reject");
    }
  });
}

fetchData();


//second approach
function fetchData_consumer() {
    let url = "https://www.randomuser.me/api/?results=5";
  //promise1
    fetch(url) //promise1
        .then(async(response) => { //consumer of promise1
          //  let res = await response.json();//promise2
            return response.json() //promise2
            //console.log(res.results[0]);
        })
        .then((jsonPromise_returnValue) => {    //consumer of promise2
            console.log(jsonPromise_returnValue);
        })
}

console.log('---------promise+consumer----------');
fetchData_consumer()



