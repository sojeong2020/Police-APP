import React  from 'react';
import BarChartCrime from '../charts/BarChartCrime';
import DoughnutCrime from '../charts/DoughnutCrime';

const Crimes = ({force,date}) => {
    
 return (
    <div className="container-fluid">
    <div className="row"> 
    
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
    <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
        <h3>Crime types description</h3>
        <BarChartCrime force={force} date={date} />
    </div>
    </div>

    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
    <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
    <h3>Crimes by outcomes</h3>
            <DoughnutCrime force={force} date={date} />
    </div>
    </div>

            
    </div>
    </div>
    );
};

export default Crimes;