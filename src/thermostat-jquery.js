
$(document).ready(function(){
  var thermostat = new Thermostat

  $("#temperature-display").html(thermostat.temperature() + '&deg;C');

  // $("#reset_button").click(function(){
  //   $("#temperature-display").html("20 °C");
  // });

  $("#up-button").click(function() {
    thermostat.up()
    $("#temperature-display").html(thermostat.temperature() + '&deg;C');
  });

  $("#down-button").click(function() {
    thermostat.down()
    $("#temperature-display").html(thermostat.temperature() + '&deg;C');
  });



});
