import React from 'react';

export default({location}) => {
    return (
        <div className="header">
          <div className="city">{location.city}</div> 
          <div className="region">{location.region}</div>
        </div>
    );
}