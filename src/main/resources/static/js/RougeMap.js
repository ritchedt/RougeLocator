function initMap(){
	var map = L.map('map')
	map.setView([38, -93], 3);

	L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
}




$( document ).ready( function() {
    if($('div#map').is(':visible')){
		initMap.call($(this));
    }
});