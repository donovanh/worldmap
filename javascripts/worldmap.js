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

  mapLeaflet.scrollWheelZoom.disable();

  // Update the map dynamically
  var socket = io('http://localhost:3567');
  socket.on('connected', function() {
    console.log('API has awoken');
  });
  socket.on('ticket sale', function(details) {
    // Define an icon called cssIcon
    var cssIcon = L.divIcon({
      // Specify a class name we can refer to in CSS.
      className: 'css-icon',
      html: details.name,
      // Set marker width and height
      iconSize: [60, 60]
    });
    L.marker(details.coords, {icon: cssIcon}).addTo(mapLeaflet);
  });
});
