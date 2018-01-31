'use strict';

describe('Feature test', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('sets the temperature to 20 °C by default', function(){
    expect(thermostat.temperature()).toEqual(20);
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
    console.log(thermostat)
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
    console.log('A');
  });

  it('raises an error if the temperature is being set < 10°C', function(){
    thermostat.setTemperature(10);
    expect(function(){ thermostat.down(); }).toThrowError('Minimum temperature reached');
    expect(thermostat.temperature()).toEqual(10);
  });


});
