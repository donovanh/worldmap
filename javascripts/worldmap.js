/**
 * Run event after DOM is ready
 * @param  {Function} fn Callback function
 */
var ready = function (fn) {
  'use strict';
  if (typeof fn !== 'function') { return; }
  if (document.readyState === 'complete') {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
};

ready(function () {

  L.mapbox.accessToken = 'pk.eyJ1IjoiZG9ub3ZhbmgiLCJhIjoiY2lwYmhheDc5MDAxZnZobm5sM3liZHA2eCJ9.gxNMYl8j-vmfLEPxkxmW2A';
  var mapLeaflet = L.mapbox.map('js-worldMap', 'mapbox.light')
    .setView([20, 0], 2)

  //mapLeaflet.scrollWheelZoom.disable();

  // Update the map dynamically
  var socket = io('https://worldmap-events-api.herokuapp.com');
  socket.on('connected', function() {
    console.log('API has awoken');
  });
  socket.on('ticket sale', function(details) {
    // Define an icon called cssIcon
    var cssIcon = L.divIcon({
      // Specify a class name we can refer to in CSS.
      className: 'worldMap-marker',
      html: '<span class="worldMap-eventName">' + details.name + '</span><span class="worldMap-point"></span>',
      // Set marker width and height
      iconSize: [1, 1]
    });
    L.marker(details.coords, {icon: cssIcon}).addTo(mapLeaflet);
  });
});
