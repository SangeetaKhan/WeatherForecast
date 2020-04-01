const API_URLS = {
    getCities: `/fetchCities`,
    getWeatherReports: `/fetchWeather`,
};

class APIHandler {
    request = url => {
        return fetch(url)
            .then(resp => resp.json())
            .catch(error => console.error("ERROR:", error));
    };
    get = (url, param) => {
        let queryParams = param ? "?param=" +param : "";
        return this.request(url+queryParams);
    };
}

const apiCaller = new APIHandler();

export {
    apiCaller,
    API_URLS
};