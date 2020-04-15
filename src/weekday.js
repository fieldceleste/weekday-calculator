export function Date (month, day, year) {
  this.month = month;
  this.day = day;
  this.year = year;

}

Date.prototype.dateCheck = function () {
  var daysofWeek = new Array (7);
    daysofWeek[0] = "Saturday";
    daysofWeek[1] = "Sunday";
    daysofWeek[2] = "Monday";
    daysofWeek[3] = "Tuesday";
    daysofWeek[4] = "Wednesday";
    daysofWeek[5] = "Thursday";
    daysofWeek[6] = "Friday";

    let date = new Date("${this.day}, ${this.month},${this.year}")
    if (date == "Not a valid date") {
      return false
    } else {

      let result = daysofWeek[date.showDay()]
      return result
    }
  }



  
   // if (this.month > 12) {
  //   return "not valid month";
  // } else if (this.month === 1 || this.month === 3 || this.month === 5 || this.month === 7 || this.month === 8 || this.month === 10 || this.month === 12) {
  //   if (this.day > 31) {
  //     return "not a valid month";
  //   }
  // } else if (this.month === 4 || this.month === 6 || this.month === 9 || this.month === 11) {
  //   if (this.day > 30) {
  //     return "not a vaild month";
  //   }
  // } else if (this.month === 2 && this.day > 28) {
  //   return "not a valid month";

