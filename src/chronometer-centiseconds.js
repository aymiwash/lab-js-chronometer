class Chronometer {
  constructor() {
    this.currentTime = 0,
    this.intervalId = null
    // ... your code goes here
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=> {
      if(printTimeCallback){
        printTimeCallback()
      }
      this.currentTime += 1;
    }, 10)
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor(this.currentTime/100/60)
    // ... your code goes here
  }

  getSeconds() {
    return Math.floor(this.currentTime/100 - this.getMinutes()*60)
    // ... your code goes here
  }

  getCentiseconds() {
    return this.currentTime - (this.getMinutes()*60*100 + this.getSeconds()*100)
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    if(value.toString().length === 1){
      return `0${value.toString()}`
    }
    return value.toString()
    // ... your code goes here
  }
  stop() {
    clearInterval(this.intervalId)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    // ... your code goes here
  }


  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`
    // ... your code goes here
  }
}
