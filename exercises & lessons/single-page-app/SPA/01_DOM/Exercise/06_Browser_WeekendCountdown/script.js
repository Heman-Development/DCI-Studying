let goBtn = document.querySelector('input[type="submit"]');

//add event listeneter to btn
goBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //create the welcome message
  let span = document.createElement("span");
  span.classList.add("small", "text-danger", "mt-3", "fw-light");

  //Date.getDay() return a number 0-6   sun-sat
  let day = new Date().getDay();
  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // alternativ to array
  /* 
  date.toLocaleDateString('en-EN', { weekday: 'long' });
  */
  
  
  let d = new Date();
  d.toLocaleDateString()

  //message
  span.innerHTML = `Hello <span class="fw-normal" > ${
    e.target.previousElementSibling.value
  }</span> Today is <span class="fw-normal">${
    weekDays[day]
  }</span>. Only <span class="fw-normal">${
    5 - day
  } </span>days left until weekend`;

  //append the welcome message into body
  document.querySelector(".main-cont").appendChild(span);
});
