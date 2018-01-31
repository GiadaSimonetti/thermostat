'use strict';

function Thermostat(){
  this.DEFAULT_TEMPERATURE = 20;
  this.MIN_TEMPERATURE = 10;
  this.PSM_ON_MAX_TEMPERATURE = 25;
  this.MAX_TEMPERATURE = this.PSM_ON_MAX_TEMPERATURE;
  this.PSM_OFF_MAX_TEMPERATURE = 32;
  this.MAX_ENERGY_USAGE_LIMIT = 25;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
  this.reset();
  this.PSM = true;
};

Thermostat.prototype.temperature = function () {
  console.log(this.DEFAULT_TEMPERATURE);
  return this._temperature;
};

Thermostat.prototype.powerSavingMode = function () {
  return this.PSM;
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
  if(temperature < this.MIN_TEMPERATURE) {
    throw new Error('Minimum temperature reached');
  };
};

Thermostat.prototype.maxTemperature = function () {
  return this.MAX_TEMPERATURE;
};

Thermostat.prototype.setPowerSavingMode = function (powerSavingMode) {
  this.PSM = powerSavingMode;
  this.MAX_TEMPERATURE = powerSavingMode ? this.PSM_ON_MAX_TEMPERATURE : this.PSM_OFF_MAX_TEMPERATURE;
};

Thermostat.prototype.reset = function () {
  this._temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.currentEnergyUsage = function () {
  return Math.floor(( Math.random() * 22) + 11);
};

Thermostat.prototype.currentEnergyUsageLevel = function () {
  if (this.currentEnergyUsage() < this.MEDIUM_ENERGY_USAGE_LIMIT) return 'low-usage';
  if (this.currentEnergyUsage() > this.MAX_ENERGY_USAGE_LIMIT) return 'high-usage';
  return 'medium-usage';
};
