'use strict';

describe('Feature test', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('sets the temperature to 20 °C by default', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('sets the temperature to 22 °C', function(){
    thermostat.setTemperature(22);
    expect(thermostat.temperature()).toEqual(22);
  });


});
