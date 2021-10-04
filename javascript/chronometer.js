class Chronometer {
  constructor() {
    this.currentTime = 0; 
    this.intervalId = null;
    // ... your code goes here
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
    },1000); 
  }
    // ... your code goes here

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime / 60); 
    return numberOfMinutes;
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime%60;  
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if (value < 10) { 
    return `0${value}`;
    } else {
      return `${value}`;
    }
  }
    // ... your code goes here

  stop() {
    clearInterval(this.intervalId);
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }

  split() {
    let formatMinutes = this.computeTwoDigitNumber(this.getMinutes()); 
    let formatSeconds = this.computeTwoDigitNumber(this.getSeconds()); 
    return`${formatMinutes}:${formatSeconds}`; 
    // ... your code goes here
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
