'use strict';

function Thermostat(){
  this._temperature = 20;
  this._powerSavingMode = true;
}

Thermostat.prototype.temperature = function () {
  return this._temperature;
};

Thermostat.prototype.powerSavingMode = function () {
  return this._powerSavingMode;
};

Thermostat.prototype.setTemperature = function (temperature) {
  this.minimumTemperature(temperature);
  this._temperature = temperature;
};

Thermostat.prototype.up = function () {
  this._temperature += 1;
};

Thermostat.prototype.down = function () {
  this.minimumTemperature(this._temperature-1);
  this._temperature -= 1;
};

Thermostat.prototype.minimumTemperature = function (temperature) {
  if(temperature < 10) {
    throw new Error('Minimum temperature reached');
  }
};
