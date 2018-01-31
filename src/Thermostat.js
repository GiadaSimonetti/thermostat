'use strict';

function Thermostat(){
  this._temperature = 20;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.setTemperature = function (temperature) {
  this._temperature = temperature;
};
