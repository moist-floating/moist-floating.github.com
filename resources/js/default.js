var postSwitch = 0;
var selectPost = 0;

$(document).ready(function(){
	L.tileLayer('https://api.mapbox.com/v4/chataehyeon.7b610352/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY2hhdGFlaHllb24iLCJhIjoiY2loNXRnOHR1MDNrOXQxbTJleHNhbnQ5dyJ9.c8OulrZB13eaEyjA3G4WFw', {
		maxZoom: 20,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);
	
	var chok = L.icon({
		iconUrl: 'resources/svg/icon-marker-normal.svg',
		iconRetinaUrl: 'resources/svg/icon-marker-normal.svg',
		iconSize: [36, 36],
		iconAnchor: [35, 35]
	});
	var current = L.icon({
		iconUrl: 'resources/svg/icon-marker-current.svg',
		iconRetinaUrl: 'resources/svg/icon-marker-current.svg',
		iconSize: [36, 36],
		iconAnchor: [35, 35]
	});
	var about = L.icon({
		iconUrl: 'resources/svg/icon-marker-about.svg',
		iconRetinaUrl: 'resources/svg/icon-marker-about.svg',
		iconSize: [34, 46],
		iconAnchor: [17, 23]
	});
	
	L.marker([37.55554, 126.97374], {icon: about}).addTo(map);
	L.marker([37.5704509,126.972531], {icon: chok}).addTo(map);
	L.marker([37.5647193,126.9757702], {icon: chok}).addTo(map);
	L.marker([37.542694,127.0545353], {icon: chok}).addTo(map);
	L.marker([37.5459802,126.9161527], {icon: current}).addTo(map);
	
	$(".leaflet-marker-icon").click(function(){
		$(this).addClass("selected");
		selectPost = $(this).index(".leaflet-marker-icon");
		if(postSwitch == 0){
			return LoadPost();
		}else{
			return closePost();
		}
	});
});

function LoadPost(){
	postSwitch = 1;
	$("#post-content").load("post/"+selectPost+".html #content");
	$("#post").addClass("opened");
	setTimeout(function(){$("#post").css("transform","translateX(800px)");},300);
}

function closePost(){
	postSwitch = 0;
	$(".leaflet-marker-icon").removeClass("selected");
	$("#post").css("transform","translateX(0)");
	setTimeout(function(){
		$("#post-content").html("");
		$("#post").removeClass("opened");
	},300);
}