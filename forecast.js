// JavaScript source code for the Forecast portion of the website

function percentage(h) {
	return Math.round(h * 100);
}

var humidity;
var temperature;
var precipProbability;
var precipProbability1;
var precipType;
var windSpeed;
var weatherSummary;

window.onload = function() {
	// Elements for current forecast
	humidity = document.getElementById("current-humidity");
	temperature = document.getElementById("current-temperature");
	precipProbability = document.getElementById("current-precipProbability");
	precipType = document.getElementById("current-precipType");
	windSpeed = document.getElementById("current-windSpeed");
	weatherSummary = document.getElementById("weather-summary");
}

function showWeather() {
	var url = 'https://api.darksky.net/forecast/22a2befdbeb91f517d36dac7bdd1ef33/42.349975,-71.140371' + '?exclude=minutely,hourly,alerts,flags' + '?format=jsonp&callback=displayWeather';
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
	displayWeather(object)
}

var object;
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var today = new Date();
theDay = today.getDay();

function displayWeather(object) {
	var skycons = new Skycons({"color":"#0f538b"});
	
	// current forecast
	skycons.add(document.getElementById("current-icon"), object.currently.icon);
	humidity.innerHTML = "Humidity: " + percentage(object.currently.humidity) + "%";
	precipProbability.innerHTML = "Precipitation Chance: " + percentage(object.currently.precipProbability) + "%";
	if (("precipType" in object.currently)==true) {
		precipType.innerHTML = "Precipitation: " + object.currently.precipType;
	} else {
		// do nothing
	}
	windSpeed.innerHTML = "Wind Speed: " +  Math.ceil(object.currently.windSpeed) + "mph"; 
	temperature.innerHTML = "Temperature: " + Math.ceil(object.currently.temperature) + " F";
	weatherSummary.innerHTML = object.currently.summary;
	console.log(object);

	// the next day's (1) forecast
	skycons.add(document.getElementById("icon1"), object.daily.data[1].icon);
	document.getElementById("weekday1").innerHTML = weekDays[(theDay+1)%7];
	document.getElementById("daily-humidity1").innerHTML = percentage(object.daily.data[1].humidity) + "%"; 
	document.getElementById("daily-precipProbability1").innerHTML = percentage(object.daily.data[1].precipProbability) + "%";
	if (("precipType" in object.daily.data[1])==true) {
		document.getElementById("daily-precipType1").innerHTML = object.daily.data[1].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed1").innerHTML = Math.ceil(object.daily.data[1].windSpeed) + "mph";
	document.getElementById("daily-temperature1").innerHTML = Math.ceil(object.daily.data[1].temperatureHigh) + " F";
	console.log(object);	

	// day 2's forecast
	skycons.add(document.getElementById("icon2"), object.daily.data[2].icon);
	document.getElementById("weekday2").innerHTML = weekDays[(theDay+2)%7];
	document.getElementById("daily-humidity2").innerHTML = percentage(object.daily.data[2].humidity) + "%";
	document.getElementById("daily-precipProbability2").innerHTML = percentage(object.daily.data[2].precipProbability) + "%";
	if (("precipType" in object.daily.data[2])==true) {
		document.getElementById("daily-precipType2").innerHTML = object.daily.data[2].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed2").innerHTML = Math.ceil(object.daily.data[2].windSpeed) + "mph";
	document.getElementById("daily-temperature2").innerHTML = Math.ceil(object.daily.data[2].temperatureHigh) + " F";
	console.log(object);

	// day 3's forecast
	skycons.add(document.getElementById("icon3"), object.daily.data[3].icon);
	document.getElementById("weekday3").innerHTML = weekDays[(theDay+3)%7];
	document.getElementById("daily-humidity3").innerHTML = percentage(object.daily.data[3].humidity) + "%";
	document.getElementById("daily-precipProbability3").innerHTML =  percentage(object.daily.data[3].precipProbability) + "%";
	if (("precipType" in object.daily.data[3])==true) {
		document.getElementById("daily-precipType3").innerHTML = object.daily.data[3].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed3").innerHTML = Math.ceil(object.daily.data[3].windSpeed) + "mph";
	document.getElementById("daily-temperature3").innerHTML = Math.ceil(object.daily.data[3].temperatureHigh) + " F";
	console.log(object);
		
	// day 4's forecast
	skycons.add(document.getElementById("icon4"), object.daily.data[4].icon);
	document.getElementById("weekday4").innerHTML = weekDays[(theDay+4)%7];
	document.getElementById("daily-humidity4").innerHTML = percentage(object.daily.data[4].humidity) + "%";
	document.getElementById("daily-precipProbability4").innerHTML = percentage(object.daily.data[4].precipProbability) + "%";
	if (("precipType" in object.daily.data[4])==true) {
		document.getElementById("daily-precipType4").innerHTML = object.daily.data[4].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed4").innerHTML = Math.ceil(object.daily.data[4].windSpeed) + "mph";
	document.getElementById("daily-temperature4").innerHTML = Math.ceil(object.daily.data[4].temperatureHigh) + " F";
	console.log(object);
	
	// day 5's forecast
	skycons.add(document.getElementById("icon5"), object.daily.data[5].icon);
	document.getElementById("weekday5").innerHTML = weekDays[(theDay+5)%7];
	document.getElementById("daily-humidity5").innerHTML = percentage(object.daily.data[5].humidity) + "%";
	document.getElementById("daily-precipProbability5").innerHTML = percentage(object.daily.data[5].precipProbability) + "%";
	if (("precipType" in object.daily.data[5])==true) {
		document.getElementById("daily-precipType5").innerHTML = object.daily.data[5].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed5").innerHTML = Math.ceil(object.daily.data[5].windSpeed) + "mph";
	document.getElementById("daily-temperature5").innerHTML = Math.ceil(object.daily.data[5].temperatureHigh) + " F";
	console.log(object);

	// day 6's forecast
	skycons.add(document.getElementById("icon6"), object.daily.data[6].icon);
	document.getElementById("weekday6").innerHTML = weekDays[(theDay+6)%7];
	document.getElementById("daily-humidity6").innerHTML = percentage(object.daily.data[6].humidity) + "%";
	document.getElementById("daily-precipProbability6").innerHTML = percentage(object.daily.data[6].precipProbability) + "%";
	if (("precipType" in object.daily.data[6])==true) {
		document.getElementById("daily-precipType6").innerHTML = object.daily.data[6].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed6").innerHTML = Math.ceil(object.daily.data[6].windSpeed) + "mph";
	document.getElementById("daily-temperature6").innerHTML = Math.ceil(object.daily.data[6].temperatureHigh) + " F";
	console.log(object);

	// day 7's forecast
	skycons.add(document.getElementById("icon7"), object.daily.data[7].icon);
	document.getElementById("weekday7").innerHTML = weekDays[(theDay+7)%7];
	document.getElementById("daily-humidity7").innerHTML = percentage(object.daily.data[7].humidity) + "%";
	document.getElementById("daily-precipProbability7").innerHTML = percentage(object.daily.data[7].precipProbability) + "%";
	if (("precipType" in object.daily.data[7])==true) {
		document.getElementById("daily-precipType7").innerHTML = object.daily.data[7].precipType;
	} else {
		// do nothing
	}
	document.getElementById("daily-windSpeed7").innerHTML = Math.ceil(object.daily.data[7].windSpeed) + "mph";
	document.getElementById("daily-temperature7").innerHTML = Math.ceil(object.daily.data[7].temperatureHigh) + " F";
	console.log(object);

	skycons.play();	
}
