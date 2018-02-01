$(document).ready(function(){

  $.ajaxSetup({ cache: false });

  $("#cities").change(function(){
    var city = this.value;
    console.log(city)

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $("#weather-display").html(Math.round(data.main.temp) + '&deg;C');
    })

  });
});
