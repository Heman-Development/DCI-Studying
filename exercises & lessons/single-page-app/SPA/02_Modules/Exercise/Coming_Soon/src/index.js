import moment from "moment";

class Counterdown {
  //endDate , selector
  constructor(ed, sel) {
    this.endDate = moment(new Date(ed));
    this.now = moment(Date.now());
    this.duration = moment.duration(this.now.diff(this.endDate));
    this.selector = sel;
  }

  displayDate() {
    let cont = document.querySelector(this.selector);
    cont.innerHTML = `
        <span>Years:<span class="badge badge-warning bg-warning"> ${Math.abs(
          this.duration._data.years
        )}</span></span>
        <span>Months:<span class="badge badge-warning bg-warning"> ${Math.abs(
          this.duration._data.months
        )}</span></span>
        <span>Days:<span class="badge badge-warning bg-warning"> ${Math.abs(
          this.duration._data.days
        )}</span></span>
        <br />
        <h3>
        <span>Hours:<span class="badge badge-warning bg-warning"> ${Math.abs(
          this.duration._data.hours
        )}</span></span>
        <span>Minutes:<span class="badge badge-warning bg-warning"> ${Math.abs(
          this.duration._data.minutes
        )}</span></span>
        <span>Seconds:<span class="badge badge-warning bg-warning"> ${Math.abs(
          this.duration._data.seconds
        )}</span></span>
        </h3>
        `;
  }
}

function startCounter(endDate) {
  let interval = setInterval(() => {
    let cd = new Counterdown(endDate, "#dateTime");
    cd.displayDate();
    if (
      cd.duration._data.years == 0 &&
      cd.duration._data.months == 0 &&
      cd.duration._data.days == 0 &&
      cd.duration._data.hours == 0 &&
      cd.duration._data.minutes == 0 &&
      cd.duration._data.seconds == 0
    ) {
      
      alert("Deadline reached");
      clearInterval(interval);
    }
    return cd;
  }, 1000);
  console.log(interval);
}

document
  .querySelector('input[type="button"]')
  .addEventListener("click", (e) => {
    let calcBtn = document.querySelector('e.target');
    if (calcBtn.previousElementSibling.children) {
      //start again
      let t1 ='';
      let t2 ='';
      let duration = '';
      
    } else {
      
      let givenDate = e.target.previousElementSibling.value;
      startCounter(givenDate);
    }
  });

document.querySelector('#stopbtn').addEventListener('click', (e) => {
  let currentCounter = document.querySelector('#dateTime').children;
  console.log(currentCounter);
  })
