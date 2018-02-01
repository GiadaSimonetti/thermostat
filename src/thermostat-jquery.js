
$(document).ready(function(){
  var thermostat = new Thermostat

  $("#temperature-display").html(thermostat.temperature() + '&deg;C');

  $("#up-button").click(function() {
    if (thermostat.PSM && thermostat.temperature() === thermostat.PSM_ON_MAX_TEMPERATURE) {
      $("#max-temperature-message").css("display", "block");
    } else if (!thermostat.PSM && thermostat.temperature() === thermostat.PSM_OFF_MAX_TEMPERATURE) {
      $("#max-temperature-message").css("display", "block");
    } else {
      thermostat.up()
      $("#temperature-display").html(thermostat.temperature() + '&deg;C');
      $("#min-temperature-message").css("display", "");
      $("#max-temperature-message").css("display", "");
    }
  });

  $("#down-button").click(function() {
    if (thermostat.temperature() <= thermostat.MIN_TEMPERATURE) {
      $("#min-temperature-message").css("display", "block");
    } else {
      thermostat.down()
      $("#max-temperature-message").css("display", "");
      $("#temperature-display").html(thermostat.temperature() + '&deg;C');
    }
  });

  $("#reset_button").click(function() {
    resetTemperature()
  });

  $("#power_saving_button").click(function(){
    if (thermostat.powerSavingMode()) {
      $("#power-saving-mode").text("Off");
    } else{
      $("#power-saving-mode").text("On");
    }
    resetTemperature()
    thermostat.PSM = !thermostat.PSM
  });

  function resetTemperature() {
    thermostat.reset()
    $("#temperature-display").html(thermostat.temperature() + '&deg;C');
    $("#min-temperature-message").css("display", "");
    $("#max-temperature-message").css("display", "");
  }
});
