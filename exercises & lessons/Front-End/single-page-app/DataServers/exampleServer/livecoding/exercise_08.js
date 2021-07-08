//find the counter with max value
function getMaxCounter() {
  let counters = JSON.parse(sessionStorage.getItem("counters")) || {};
  let max = Object.keys(counters)[0]; //counters={key1:val1, key2:val2, key3:val3}    **Object.keys(counter)[0] return key1**
  for (let props in counters) {
    counters[`${props}`] > counters[`${max}`] ? (max = props) : null;
  }

  return { name: max, counter: counters[`${max}`] };
}

//add an eventListener to every item in the list of grabbed items
function registerListeners(list) {
  let outputCont = document.querySelector("#output-cont");
  let counters = JSON.parse(sessionStorage.getItem("counters")) || {};
  //console.log('here');
    //LOOP through grabbed links to add listener
    for (let elem of list) {
        elem.addEventListener("click", (e) => {
            //to prevent from overwriting the content of counters after
            //each click we need to spread the previous content of 
            //counters array into itself
            counters = {
            ...counters,    
            [e.target.id]: counters[`${e.target.id}`] + 1 || 1      //increment the related counter or set 1 after first click
        };
        sessionStorage.setItem("counters", JSON.stringify(counters));
        sessionStorage.setItem("maxCounter", JSON.stringify(getMaxCounter()));

        const { name, counter } = getMaxCounter();  //destructuring returned object into variables
        outputCont.innerHTML = displayTemp(name, counter);
        });
    }
}

//template that should be displayed in the output box
function displayTemp(name, counter) {
    return `
            <span>
                Name:<span class="text-danger"> ${name}</span>
                Clicks:<span class="text-danger"> ${counter}</span>
            </span>    
            `;
}


let links = document.querySelectorAll('input[type="button"]');
registerListeners(links);


