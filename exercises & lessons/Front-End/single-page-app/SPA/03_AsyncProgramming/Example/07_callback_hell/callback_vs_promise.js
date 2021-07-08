//callback hell
/* 
        Callback hell:
            When we use many callback functions nestedly.
            Example:
            function setInfo(name) {
                address(myAddress) {
                    officeAddress(myOfficeAddress) {
                        telephoneNumber(myTelephoneNumber) {
                            nextOfKin(myNextOfKin) {
                            console.log('done'); //let's begin to close each function! 
                            };
                        };
                    };
                };
            }
*/

/*
Example: 
    - We have 3 tasks that should be executed in order (task1, task2, task3)
    - Each task has specific duration (task1=3s, task2=2s, task1=1s)

    * below you can find 2 approach to solve the problem
*/

//approach-1 : using callback (callback-hell)
/* function execTasks_callback(number) {
  console.log("given number:", number, "\n----");
  //task1: takes 3s to be finished
  setTimeout(function () {
                                                        //task1 started
    task1_number = number * 2;
    console.log("task1_number:", task1_number);
    console.log("task1 finished \n------------");

                                                        //task2: takes 2s to be finished
    setTimeout(function () {
                                                        //task2 started
      task2_number = task1_number + 10;
      console.log("task2_number:", task2_number);
      console.log("task2 finished \n------------");

                                                        //task3: takes 1s to be finished
      setTimeout(function () {
                                                        //task3 started
        task3_number = task2_number / 3;
        console.log("task3_number:", task3_number);
        console.log("task3 finished \n------------");
      }, 1000);                                         //task3 ended
    }, 2000);                                           //task2 ended
  }, 3000);                                             //task1 ended
}

execTasks_callback(10); */

//second approach, using promise
function execTasks_promise(number) {
  console.log("given number:", number, "\n----");
  return new Promise(function (resolve, reject) {
                                                            //start of task1
    let num2 = number * 2;
    setTimeout(() => {
      console.log("task1_number", num2);
      console.log("task1 finished\n-------");
      resolve(num2);
    }, 3000);
  })                                                          //end of task1
    .then((num2) => {
      return new Promise(function (resolve, reject) {
                                                              //start of task2
        let num3 = num2 + 10;
        setTimeout(() => {
          console.log("task2_number", num3);
          console.log("task2 finished\n-------");
          resolve(num3);
        }, 2000);
      });                                                       //end of task2
    })
    .then((num3) => {
      return new Promise(function (resolve, reject) {
                                                                //start of task3
        let num4 = num3 / 3;
        setTimeout(() => {
          console.log("task3_number", num4);
          console.log("task3 finished\n-------");
          resolve(num4);
        }, 1000);
      });                                                         //end of task3
    })
    .then((finalResult) => {
      console.log("FinalResult:", finalResult, "\n");
    })
    .catch((error) => {
      console.log(error.message);
    });
}

execTasks_promise(10);


/* 
Promise
  .then(() => {
    //task1
  })
  .then(() => {
    //task2
  })
  .then(() => {
    //task3
  });


func(() => {
  () => {
    //task1
    () => {
        //task2
      () => {
          //task3
          
        }
      }
    }
  }) 
  */