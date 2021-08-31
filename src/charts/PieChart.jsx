import React from 'react';
import {Pie} from 'react-chartjs-2';


const PieChart = (props) => {
    const chartData= props.pieData
    console.log(chartData,"<<<< from piechart")

    return (
        <div>
            <p>I am pieChart !!!</p>
        </div>
    );
};

export default PieChart;