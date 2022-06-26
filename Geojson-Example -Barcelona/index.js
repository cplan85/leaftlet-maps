var map = L.map("map").setView([41.3947, 2.1698], 13);

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

/* global statesData */
var geojson = L.geoJson(barcelona).addTo(map);

console.log("GEOJSON OBJECT", barcelona);

function getColor(d) {
  return d > 70
    ? "#800026"
    : d > 60
    ? "#BD0026"
    : d > 50
    ? "#E31A1C"
    : d > 30
    ? "#FC4E2A"
    : d > 20
    ? "#FD8D3C"
    : d > 10
    ? "#FEB24C"
    : d > 0
    ? "#FED976"
    : "#FFEDA0";
}

console.log("Input GEojson", barcelona);

let indexes = barcelona.features.map((item, idx) => {
  return idx;
});
function style(feature) {
  return {
    fillColor: getColor(parseInt(feature.properties.BARRI)),
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
  };
}

L.geoJson(barcelona, { style: style }).addTo(map);
