function changefocus(lat,lng, zoom) {
  // map.panTo(new L.LatLng(lat, lng));
  map.setView(new L.LatLng(lat, lng), zoom);
  // map.flyTo([40.737, -73.923], 10)
}

var map = L.map('mapid',{
  // zoomDelta: 0.05,
  wheelPxPerZoomLevel: 120, 
  wheelDebounceTime: 10,
  // zoomSnap:0
}).setView([-26.273714, 136.538086], 4 );


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-27, 137]).addTo(map)

var greenIcon = L.icon({
  iconUrl: '../img/crocodile.png',
  iconSize:     [75, ]
});
var jellyfish = L.icon({
  iconUrl: '../img/jellyfish.png',
  iconSize:     [75, ]
});

L.marker([-12.46172, 130.83], {icon: greenIcon}).addTo(map)
L.marker([-12.46172, 130.8350], {icon: greenIcon}).addTo(map)
L.marker([-12.46172, 130.8398], {icon: greenIcon}).addTo(map)
L.marker([-20, 152.177124], {icon: jellyfish}).addTo(map)
L.marker([-16.962233, 152.177124], {icon: jellyfish}).addTo(map)
// -12.46172, 130.8398, 15

    
map.on('dragend', function onDragEnd() {
  console.log('center: ' + map.getCenter());
})



