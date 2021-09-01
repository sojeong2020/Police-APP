import React from 'react';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import RadarChart from '../charts/RadarChart';

const StopSearch = ({force,date}) => {
    
    return (
        <div>
            <h3>I am radar.</h3>
            <RadarChart force={force} date={date}/>
            <h3>I am line.</h3>
            <LineChart force={force} date={date}/>
            <h3>I am pie.</h3>
            <PieChart force={force} date={date}/>
            <h3>I am bar.</h3>
            <BarChart force={force} date={date}/>
            
        </div>
    );
};

export default StopSearch;