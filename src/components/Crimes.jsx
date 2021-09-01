import React  from 'react';
import LineChartCrime from '../charts/LineChartCrime';
import DoughnutCrime from '../charts/DoughnutCrime';

const Crimes = ({force,date}) => {
    
 return (
        <div>
            
            <h3>Crime types description</h3>
            <LineChartCrime force={force} date={date} />
            <h3>Crimes by outcomes</h3>
            <DoughnutCrime force={force} date={date} />
        </div>
    );
};

export default Crimes;