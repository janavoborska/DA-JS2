'use strict';

console.log('funguju');

let hodina = 0;
let minuta = 0;
while (hodina < 24) {
  while (minuta < 60) {
    if (minuta < 10) {
      console.log(hodina + ':0' + minuta);
      minuta += 1;
    } else {
      console.log(hodina + ':' + minuta);
      minuta += 1;
    }
  }
  minuta = 0;
  hodina += 1;
}
/*
let timeMinutes = 0;
let timeHours = 0;
while (timeHours < 24) {
  while (timeMinutes < 60) {
    if (timeMinutes < 10) {
      console.log(timeHours + ':0' + timeMinutes);
      timeMinutes += 1;
    } else {
      console.log(timeHours + ':' + timeMinutes);
      timeMinutes += 1;
    }
  }
  timeHours += 1;
  timeMinutes = 0;
}
*/
