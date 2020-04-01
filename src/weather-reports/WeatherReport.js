import React from 'react';
import Header from './header/Header';
import ForecastBlock from './forecast-block/ForecastBlock';
import CurrentObservation from './current-observation-block/CurrentObservation'
import './WeatherReports.css';

export  default({report}) => {
    if(!report ) {
        return null;
    }
    return(
        <div className="reports-wrapper">
            <div className="header-details">
                <Header location={report.location}/>
                <CurrentObservation currentReport={report.current_observation}/>
            </div>
            <ForecastBlock forecastReport={report.forecasts}/>
        </div>
    );
}