import React,  { PureComponent } from 'react';
import {Utils} from '../../utils/Utils';
import upArrow from '../../images/up.svg';
import down from '../../images/down.svg';

export default class extends PureComponent {
    render () {
        const {forecastReport} = this.props;
        if (!forecastReport) {
            return null;
          }
        return (
            <div className="forecast-report-wrapper">
                {this.renderForecastBlock()}
            </div>
           
        );
    };
    renderForecastBlock = () => {
        const {forecastReport} = this.props;
        return (
            forecastReport.map((item, index) => {

                return (
                    <div className="forecast-tiles">
                        <p className="item">{Utils.setUTCDate(item.date)}</p>
                        <p className="item">
                            <span className="span">{item.high}
                            <img src={upArrow} className="arrow"/>
                            </span>
                        </p>
                        <p className="item">
                            <span className="span">{item.low}</span>
                            <img src={down} className="arrow"/>
                        </p>
                        <p className="item">{item.text}</p>
                    </div>
                )
                })
        );
    };
}