function func(cb) {
  //your statments here

  cb();
}

//event, listener, handler
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    console.log(e.target.innerText);
  });
});
let user = {};
let textFields = document.querySelectorAll("input[type='text']");
textFields.forEach((elem) => {
  elem.addEventListener("change", (e) => {
    console.log(e);
    /* console.log(e.target.value);
      console.log(e.target.name); */
    user[`${e.target.name}`] = e.target.value;
    console.log(user);
  });
});

let submitbtn = document.querySelector("input[type='submit']");
console.log(submitbtn);
const testPreventDefault = (e) => {
  e.preventDefault();
};
submitbtn.addEventListener("click", testPreventDefault);

submitbtn.removeEventListener('click', testPreventDefault)


/* 
let names = ['fahim', 'Darko', 'Carlo', 'Ratko']
names[0]

let book = { title: 'Javascript Programming', pages: 300, publisher: 'company x' }

book['title'] = 'new Book'

 */
