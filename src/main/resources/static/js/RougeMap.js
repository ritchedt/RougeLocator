
function locateRogueAgents(map, lat, long, agentGender, name, age){

	var customIconMale = L.icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
		iconSize:     [20, 30],
		popupAnchor:  [-3, -76]
	});

	var customIconFemale = L.icon({
		iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
		iconSize:     [20, 30],
		popupAnchor:  [-3, -76]
	});

	var markerLocation2 = new L.LatLng(lat,long);

	var gender = agentGender;


	if(gender === "Male"){
		L.marker(markerLocation2, {icon: customIconMale}).addTo(map).bindPopup('<dl><dt>Target: ' + name + '</dt><dt>Age: ' + age + '</dt></dl>' );
	}else{
		L.marker(markerLocation2, {icon: customIconFemale}).addTo(map).bindPopup('<dl><dt>Target: ' + name + '</dt><dt>Age: ' + age + '</dt></dl>' );
	}
}



function mapContainer(){

	var map = L.map('map').setView([38, -93], 3);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	return map;
}

