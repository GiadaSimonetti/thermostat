'use strict';

function Thermostat(){
  this._defaultTemperature = 20;
  this._minTemperature = 10;
  this._powerSavingModeOnMaxTemperature = 25;
  this._maxTemperature = this._powerSavingModeOnMaxTemperature;
  this._powerSavingModeOffMaxTemperature = 32;
  this._temperature = this._defaultTemperature;
  this._powerSavingMode = true;
};

Thermostat.prototype.temperature = function () {
  console.log(this._defaultTemperature);
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
  if(temperature < this._minTemperature) {
    throw new Error('Minimum temperature reached');
  };
};

  Thermostat.prototype.maxTemperature = function () {
    return this._maxTemperature;
  };

  Thermostat.prototype.setPowerSavingMode = function (powerSavingMode) {
    this._powerSavingMode = powerSavingMode;
    this._maxTemperature = powerSavingMode ? this._powerSavingModeOnMaxTemperature : this._powerSavingModeOffMaxTemperature;
  };
