import React  from 'react';
import BarChartCrime from '../charts/BarChartCrime';
import DoughnutCrime from '../charts/DoughnutCrime';

const Crimes = ({force,date}) => {
    
 return (
        <div>
            
            <h3>Crime types description</h3>
            <BarChartCrime force={force} date={date} />
            <h3>Crimes by outcomes</h3>
            <DoughnutCrime force={force} date={date} />
        </div>
    );
};

export default Crimes;