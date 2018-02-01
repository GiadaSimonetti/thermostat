
$(document).ready(function(){
  var thermostat = new Thermostat

  $("#temperature-display").html(thermostat.temperature() + '&deg;C');

  $("#up-button").click(function() {
    thermostat.up()
    $("#temperature-display").html(thermostat.temperature() + '&deg;C');
  });

  $("#down-button").click(function() {
    thermostat.down()
    $("#temperature-display").html(thermostat.temperature() + '&deg;C');
  });

  $("#reset_button").click(function() {
    thermostat.reset()
    $("#temperature-display").html(thermostat.temperature() + '&deg;C');
  });

  $("#power_saving_button").click(function(){
    if (thermostat.powerSavingMode()) {
      $("#power-saving-mode").text("Off");
    } else{
      $("#power-saving-mode").text("On");
    }
    thermostat.PSM = !thermostat.PSM
  });



});
