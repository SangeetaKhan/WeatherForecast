import React, { Component } from 'react';
import Cities from './cities/Cities';
import { apiCaller, API_URLS } from './services/service';
import WeatherReport from './weather-reports/WeatherReport';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cities:[],
        weatherReports:null
    };
  }
  
  render() {
    const { cities, weatherReports } = this.state;
    return (
      <div className="app-wrapper">
         <Cities cities ={cities}
                onSelect={this.fetchCityWeather} />
          <WeatherReport report={weatherReports}/>
      </div>
    );
  }
  getCities = () => {
    apiCaller.get([API_URLS.getCities]).then(cities => {
      this.setState({
         cities
      })
    });
  }
  fetchCityWeather = (option) => {
    apiCaller.get([API_URLS.getWeatherReports], option.city_name)
    .then(weatherReports => {
      this.setState({
         weatherReports
      });
    });
  }
  componentDidMount() {
    this.getCities();
  }
}

export default App;