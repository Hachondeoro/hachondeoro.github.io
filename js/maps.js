var map = L.map('mapid',{
  // zoomDelta: 0.05,
  wheelPxPerZoomLevel: 120, 
  wheelDebounceTime: 10,
  // zoomSnap:0
}).setView([-27, 137], 5 );


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-27, 137]).addTo(map)

var greenIcon = L.icon({
  iconUrl: '../img/crocodile.png',

  iconSize:     [100, ], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([-27, 137], {icon: greenIcon}).addTo(map)
    .bindPopup('Here are some crocos!')
    .openPopup(); 

map.on('dragend', function onDragEnd() {
  console.log('center: ' + map.getCenter())
})


