import React from 'react';
import {Bar} from 'react-chartjs-2';

const BarChart = (props) => {
    const chartData=  props.barData
    console.log( chartData,"<<<< from barchart")
    
    return (
        <div>
            <p>I am Bar!</p>
        </div>
    );
};

export default BarChart;