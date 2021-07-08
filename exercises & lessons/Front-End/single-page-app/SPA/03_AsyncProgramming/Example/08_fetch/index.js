/* 
    ***Fetch
        -> JavaScript can send network requests to the server and load new information whenever it’s needed.

            For example, we can use a network request to:
                - Submit an order,
                - Load user information,
                - Receive latest updates from the server,
                …etc.

        And all of that without reloading the page!

        -> Getting a response is usually a two-stage process
            
            1- return a promise by fetch, that resolves with an object of the built-in Response class as soon as the server responds with headers.
                *- At this stage we can check HTTP status, to see whether it is successful or not, check headers, but don’t have the body yet.
            
            2- get the response body, that needs to use an additional method call
                *- Response provides multiple promise-based methods to access the body in various formats:

                    =>  response.text() – read the response and return as text,
                    =>  response.json() – parse the response as JSON,
                    =>  response.formData() – return the response as FormData object 
                    =>  response.blob() – return the response as Blob 
                    =>  response.arrayBuffer() – return the response as ArrayBuffer         (low-level representation of binary data)
                    =>  additionally, response.body is a ReadableStream object, it allows you to read the body chunk-by-chunk


        -> Syntax of using fetch        fetch(url, [options])

                URL: contains the address of API server and extra information such as query string variables
                Example:    https://randomuser.me/api/?results=5

                Options: options is an object that allows you to control a number of different settings of request such as:
                    1- method: GET, POST, PUT, DELETE
                    2- body: data
                    3- headers: {'Content-Type'}
                    4- mode: 'cors', 'no-cors', '*cors', 'same-origin'
                    
*/

//example:

let url = "https://randomuser.me/api/?nat=us&results=5";
let users;
//fetch with 2 then block
fetch(url, {
  method: "GET",
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((jsonResult) => {
    console.log(jsonResult);
    jsonResult.results.forEach((user) => {
      console.log(user);
      let userCard = `<div class="card" style="width: 18rem;">
                          <img src="${user.picture.large}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">Name: ${user.name.last}, ${user.name.first}</h5>
                              <p class="card-text">Email: ${user.email}</p>
                          </div>
                      </div>`;

      document.querySelector("#user-profile").innerHTML += userCard;
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

/*
  //fetch with await and one then block
fetch(url, {      
  method: "GET",
})
  .then(async function (response) {
    let jsonData = await response.json();

    jsonData.results.forEach((user) => {
      console.log(user);
      let userCard = `<div class="card" style="width: 18rem;">
                          <img src="${user.picture.large}" class="card-img-top" alt="...">
                          <div class="card-body">
                              <h5 class="card-title">Name: ${user.name.last}, ${user.name.first}</h5>
                              <p class="card-text">Email: ${user.email}</p>
                          </div>
                      </div>`;

      document.querySelector("#user-profile").innerHTML += userCard;
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
*/

console.log("after fetch");
