class Weather {
	constructor(city, country) {
		this.apikey = '';
		this.city = city;
		this.country = country;
	}

	//Fetch weather from API
	async getWeather() {
		const response = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
				this.country
			}&APPID=${this.apikey}`
		);

		const responseData = await response.json();

		return responseData;
	}

	//Change location
	changeLocation(city, country) {
		this.city = city;
		this.country = country;
	}
}
