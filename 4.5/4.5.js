(function () {
  "use strict";

  function leapYear(year) {
    let flag = false;
    if (year % 4 == 0) {
      flag = true;
      if (year % 100 == 0) {
        flag = false;
        if (year % 400 == 0) flag = true;
      }
    }
    return flag;
  }

  console.log(
    leapYear(2400) ? "It is indeed a leap year" : "This is not a leap year"
  );
})();
