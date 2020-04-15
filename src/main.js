import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { myDate } from './weekday';

$(document).ready(function () {
  $('#date-input').submit(function (event) {
    event.preventDefault();

    let inputYear = parseInt($("#year").val());
    let inputMonth = parseInt($("#month").val());
    console.log(inputMonth);
    let inputDay = parseInt($("#day").val());
    console.log(inputDay);

    let dayofWeek = new myDate(inputMonth, inputDay, inputYear);
    console.log(dayofWeek);
    let day = dayofWeek.dateCheck();
    $("#showresult").html("<p>" + "This date falls on a" + day + "." + "</p>");
    $("#result").show();
  });
});




//  $("#showresult").html(inputCalculator.datecheck()); .html('<p>' + 'the weekday is/was' + weekDay + '.' + '</p>') 