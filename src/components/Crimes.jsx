import React  from 'react';
import LineChartCrime from '../charts/LineChartCrime';

const Crimes = ({force,date}) => {
    


    
    return (
        <div>
            <h2>Crimes</h2>
            <h3>Crimes by categories</h3>
            <LineChartCrime force={force} date={date} />
        </div>
    );
};

export default Crimes;