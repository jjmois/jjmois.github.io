$(document).ready(function() {
	var latitude = 37.773972;
	var longitude = -122.431297;

	var API_KEY = "782fe0c93cb30c12f62abff66cf915f2";
	$.getJSON("http://api.openweathermap.org/data/2.5/weather" +
	"?lat=" + latitude +
	"&lon=" + longitude +
	"&appid=" + API_KEY,
	function(json) {
	// Get weather icon
	var weatherIcons = {
		"200": "thunderstorm",
		"201": "thunderstorm",
		"202": "thunderstorm",
		"210": "lightning",
		"211": "lightning",
		"212": "lightning",
		"221": "lightning",
		"230": "thunderstorm",
		"231": "thunderstorm",
		"232": "thunderstorm",
		"300": "sprinkle",
		"301": "sprinkle",
		"302": "rain",
		"310": "rain-mix",
		"311": "rain",
		"312": "rain",
		"313": "showers",
		"314": "rain",
		"321": "sprinkle",
		"500": "sprinkle",
		"501": "rain",
		"502": "rain",
		"503": "rain",
		"504": "rain",
		"511": "rain-mix",
		"520": "showers",
		"521": "showers",
		"522": "showers",
		"531": "storm-showers",
		"600": "snow",
		"601": "snow",
		"602": "sleet",
		"611": "rain-mix",
		"612": "rain-mix",
		"615": "rain-mix",
		"616": "rain-mix",
		"620": "rain-mix",
		"621": "snow",
		"622": "snow",
		"701": "showers",
		"711": "smoke",
		"721": "day-haze",
		"731": "dust",
		"741": "fog",
		"761": "dust",
		"762": "dust",
		"771": "cloudy-gusts",
		"781": "tornado",
		"800": "day-sunny",
		"801": "cloudy-gusts",
		"802": "cloudy-gusts",
		"803": "cloudy-gusts",
		"804": "cloudy",
		"900": "tornado",
		"901": "storm-showers",
		"902": "hurricane",
		"903": "snowflake-cold",
		"904": "hot",
		"905": "windy",
		"906": "hail"
	}
	// Set the icon to the weather ID
	$('i').addClass("wi-" + weatherIcons[json.weather[0].id]);

	// Get city name
	$('.cityName').text(json.name);

	// Get condition description
	$('.description').text(json.weather[0].description + " ja baby");

	// k = f + 459.67 * 5/9
	// c = f - 32 / 1.8
	// f = c * 1.8 + 32
	// f = k * 9/5 - 459.67
	var farenheit = Math.floor((json.main.temp * (9/5)) - 459.67);
	var celsius = Math.floor((farenheit - 32) / 1.8);
	$('.tempValue').text(farenheit);

	// Click to change Farenheit to Celsius
	$('#tempUnit').click(function() {
		var currentTempUnit = $('#tempUnit').text();

		// Toggle F to C
		$(this).text(currentTempUnit === "°F" ? "°C" : "°F");

		// Input tempValues based on unit
		if (currentTempUnit == "°C") {
			$('.tempValue').text(farenheit);
		} else {
			$('.tempValue').text(celsius);
		}
	});
	});
});