//Standalone runtime for Regenerator-compiled generator and async functions.
require("regenerator-runtime/runtime");
// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
let moment = require("moment");

// \/ All of your javascript should go here \/
class Countdown {
  constructor(endDate, selector) {
    this.endDate = new Date(endDate);
    this.selector = selector;
    this.now = moment();
    this.duration = { ...moment.duration(this.now.diff(this.endDate))._data };
  }

  render() {
      //let span = document.createElement("span");
    //year
    //span.innerText = `Second ${Math.abs(this.duration.seconds)}`;

      let container = document.querySelector(this.selector);
      container.innerHTML = `
            <span>Second: ${Math.abs(this.duration.seconds)}</span>
            <span>Minute: ${Math.abs(this.duration.minutes)}</span>
            <span>Houre: ${Math.abs(this.duration.hours)}</span>
            <span>Day: ${Math.abs(this.duration.days)}</span>
            <span>Month: ${Math.abs(this.duration.months)}</span>
            <span>Year: ${Math.abs(this.duration.years)}</span>
            `;
  }

}



 let interval = setInterval(function () {
  let cd = new Countdown("2025-12-31", ".container");
    if (cd.duration.seconds == 0) {
        clearInterval(interval)
    }
  cd.render();
 }, 1000);

