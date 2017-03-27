function getGenderIcon(gender){
	var url;

	if(gender === "Male")
		url = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png';
	else
		url = 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png';

	var genderIcon = L.icon({
		iconUrl: url,
		iconSize: [20, 30],
		popupAnchor: [-3, -30]
	});

	return genderIcon;
}

function locatedAgentCircledArea(map, lat, long){
	L.circleMarker([lat,long],{Opacity:1, color:'red', radius:30 }).addTo(map);
}


function locateRogueAgent(map, lat, long, agentGender, name, age){

	var genderIcon = getGenderIcon(agentGender)

	L.marker(new L.LatLng(lat,long), {icon: genderIcon}).addTo(map)
	.bindPopup('<dl><dt>Target: ' + name + '</dt><dt>Age: ' + age + '</dt></dl>' );
}

function mapContainer(){

	var map = L.map('map').setView([38, -93], 3);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);

	return map;
}
