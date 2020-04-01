import React from 'react';

export default({currentReport}) => {
    return (
        <div className="current-report-wrapper">
            <span>{currentReport.condition.text}</span>
            <span> {currentReport.condition.temperature}deg</span>
        </div>
    );
}