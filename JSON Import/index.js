var map = L.map("map").setView([41.3947, 2.1698], 12);

var tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var angularIcon = L.icon({
  iconUrl: "./assets/angular-icon.svg",
  shadowUrl: "./assets/leaf-shadow.png",
  alt: "Angular",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

let url = "data/greenSites.json";
fetch(url)
  .then((res) => res.json())
  .then((out) => {
    console.log("Checkout this JSON! ", out);

    out.forEach((object) => {
      return L.marker(
        [
          parseFloat(object.geo_epgs_4326_x),
          parseFloat(object.geo_epgs_4326_y),
        ],
        { icon: angularIcon }
      ).addTo(map).bindPopup(`This is ${object.addresses_district_name}
        Address: ${object.addresses_road_name}, ${object.addresses_start_street_number}
        `);
    });
  })
  .catch((err) => {
    throw err;
  });

/*
  let url = "data/greenSites.json";
fetch(url)
  .then((res) => res.json())
  .then((out) => {
    console.log("Checkout this JSON! ", out);
   
    out.forEach((object) => {
      return L.marker(
        [
          parseFloat(object.geo_epgs_4326_x),
          parseFloat(object.geo_epgs_4326_y),
        ],
        { icon: angularIcon }
      ).addTo(map).bindPopup(`This is ${object.addresses_district_name}
        Address: ${object.addresses_road_name}, ${object.addresses_start_street_number}
        `);
    }); 
  })
  .catch((err) => {
    throw err;
  });

  */
