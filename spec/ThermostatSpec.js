'use strict';

describe('Feature test', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('sets the temperature to 20 °C by default', function(){
    console.log(thermostat._maxTemperature)
    expect(thermostat.temperature()).toEqual(thermostat._defaultTemperature);
  });

  it('sets power saving ON by default', function(){
    expect(thermostat.powerSavingMode()).toEqual(true);
  });

  it('sets the temperature to 22 °C', function(){
    thermostat.setTemperature(22);
    expect(thermostat.temperature()).toEqual(22);
  });

  it('can\'t set the temperature below 10 °C', function(){
    expect(function(){ thermostat.setTemperature(9); }).toThrowError('Minimum temperature reached');
  });

  it('sets the temperature up 1°C using up()', function(){
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('sets the temperature down 1°C using down()', function(){
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('raises an error if the temperature is being set < 10°C', function(){
    thermostat.setTemperature(thermostat._minTemperature);
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature reached');
    expect(thermostat.temperature()).toEqual(thermostat._minTemperature);
  });

  it('sets maximum temperature to 25°C if power saving mode is ON', function(){
    expect(thermostat.maxTemperature()).toEqual(thermostat._maxTemperature);
  });

  it('sets power saving OFF', function(){
    thermostat.setPowerSavingMode(false);
    expect(thermostat.powerSavingMode()).toEqual(false);
  });

  it('sets maximum temperature to 32°C if power saving mode is OFF', function(){
    thermostat.setPowerSavingMode(false);
    expect(thermostat.maxTemperature()).toEqual(thermostat._powerSavingModeOffMaxTemperature);
  });

});
