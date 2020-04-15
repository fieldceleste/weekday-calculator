import $ from 'jquery'; 
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#dateInput').submit(function(event) {
    event.preventDefault();

   let inputYear = parseInt($('#year').val());
   let inputMonth = parseInt($("#month").val());
   let inputDay = parseInt($("#day").val());

   let inputCalculator = new Date (inputYear, inputMonth, inputDay);
   $("#result").text(inputCalculator.datecheck());
});
});