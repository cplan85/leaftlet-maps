var map = L.map("map").setView([37.8, -96], 4);

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

console.log(statesData);

/* global statesData */
var geojson = L.geoJson(statesData).addTo(map);
