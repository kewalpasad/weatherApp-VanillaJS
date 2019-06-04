class UI {
	constructor() {
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.icon = document.getElementById('w-icon');
		this.details = document.getElementById('w-details');
		this.humidity = document.getElementById('w-humidity');
		this.tempHighLow = document.getElementById('w-temp-high-low');
		this.wind = document.getElementById('w-wind');
		this.sunRiseSet = document.getElementById('w-sun-rise-set');
		this.riseHour;
		this.riseMin;
		this.setHour;
		this.setMin;
	}


	paint(weather) {
		this.location.textContent = `${weather.name} ${weather.sys.country}`;
		this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
		this.riseHour = (new Date(weather.sys.sunrise * 1000)).getHours();
		this.riseMin = (new Date(weather.sys.sunrise * 1000)).getMinutes();
		this.setHour = (new Date(weather.sys.sunset * 1000)).getHours();
		this.setMin = (new Date(weather.sys.sunrise * 1000)).getMinutes();
		this.desc.textContent = `${weather.weather[0].description}`;
		this.string.textContent = `${Math.floor((9/5)*weather.main.temp - 459.67)}\xB0F`
		this.humidity.textContent = `RELATIVE HUMIDITY: ${weather.main.humidity}%`;
		this.wind.textContent = `WIND SPEED ${(2.237*weather.wind.speed).toFixed(2)} MPH, DIRECTION: ${weather.wind.deg}\xB0`;
		this.tempHighLow.textContent = `HIGH: ${Math.floor((9/5)*weather.main.temp_max - 459.67)}\xB0F \t LOW: ${Math.floor((9/5)*weather.main.temp_min - 459.67)}\xB0F`;
		this.sunRiseSet.textContent = `Sunrise: ${this.riseHour}:${this.riseMin} AM Sunset: ${this.setHour}:${this.setMin} PM`
	}
}
