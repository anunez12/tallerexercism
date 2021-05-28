export class Clock {
  constructor(hour, minute = 0) {
    this.minute = minute;
    this.hour = hour;
  }

  formatTime = () => {
    while (this.minute >= 60) this.hour++, this.minute-=60;
    while ( this.minute < 0 ) this.hour--, this.minute+=60;

    while (this.hour >=24) this.hour-=24;
    while (this.hour < 0 ) this.hour+=24;
  }

  toString() {
    this.formatTime();
    return [this.hour, this.minute].map(v => v.toString().padStart(2, '0')).join(':');
  }

  plus(min) {
    this.minute += min;
    return this;
  }

  minus(min) {
    this.minute -= min;
    return this;
  }

  equals(anotherClock) {
    return this.toString() === anotherClock.toString();
  }
}
