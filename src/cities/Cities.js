import React,  { PureComponent } from 'react';
import  './Cities.css';

export  default class extends PureComponent {
    render () {
        const {cities} = this.props;
        if (!cities) {
            return null;
          }
        return (
            <div className="cities-wrapper">
                <select className="cities-filter" onChange={this.optionSelected}> 
                <option value='' >Select a category</option>
                    {cities.map(item => (
                    <option value={item.city_name}>{item.city_name}</option>
                    ))}
                </select>
            </div>
           
        )
    }
    optionSelected = (e) => {
        let selectedCity = this.props.cities[e.target.options.selectedIndex - 1];
        // var value = [];
        // for (var i = 0, l = options.length; i < l; i++) {
        //   if (options[i].selected) {
        //     value.push(options[i].value);
        //   }
        // }
        this.props.onSelect(selectedCity);
    }
}