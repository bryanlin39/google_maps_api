var Mappy = require('./../js/map.js').mapModule

$(document).ready(function(){
  $('#map-form').click(function(){
    var userLat = parseInt($('#lat').val());
    var userLng = parseInt($('#long').val());
    myMap = new Mappy(userLat, userLng);
    myMap.place();
  });

  $('#search-map').click(function(){
    $('#map-form').hide()
    var userSearch = $('#search-txt').val();
    var newMap = new Mappy();
    newMap.search()
  });
});
