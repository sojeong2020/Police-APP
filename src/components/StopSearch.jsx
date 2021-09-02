import React from 'react';
import RadarChart from '../charts/RadarChart';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';


const StopSearch = ({force,date}) => {
    
    return (
        <div className="container-fluid">
            
            <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">

            <h2>Age range</h2>
            <RadarChart force={force} date={date}/>

            </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
            <h2>Self defined ethnicity</h2>
            <PieChart force={force} date={date}/>
            </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 p-1">
            <div className="card shadow mb-xl-2 mb-lg-2 mg-md-2 mb-sm-2 mb-2">
            <h2>Outcome</h2>
            <BarChart force={force} date={date}/>
            </div>
            </div>
            </div>
        </div>
    );
};

export default StopSearch;