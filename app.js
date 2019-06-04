//Init storage object
const storage = new Storage();

//Get stored location Data
const weatherLocation = storage.getLocationData();

// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//event listener on the change location button
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const city = document.getElementById('city').value;
	const country = document.getElementById('country').value;

  weather.changeLocation(city, country);

	storage.setLocationData(city, country);

	getWeather();

	//close Modal
	$('#locModal').modal('hide');
});

// weather.changeLocation('Miami', 'FL');

function getWeather() {
	weather
		.getWeather()
		.then(results => {
			ui.paint(results);
		})
		.catch(err => console.log(err));
}
