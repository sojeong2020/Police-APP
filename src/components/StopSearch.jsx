import React from 'react';
import RadarChart from '../charts/RadarChart';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';


const StopSearch = ({force,date}) => {
    
    return (
        <div>
            <h1>Stop and search</h1>
            <h2>Age range</h2>
            <RadarChart force={force} date={date}/>
            <h2>Self defined ethnicity</h2>
            <PieChart force={force} date={date}/>
            <h2>Outcome</h2>
            <BarChart force={force} date={date}/>
            
            
        </div>
    );
};

export default StopSearch;