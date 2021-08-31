import React from 'react';

const PieChart = (props) => {
    const chartData = props.searchData
    console.log(chartData,"<<< from piechart")

    return (
        <div>
            <p>I am Pie!</p>
        </div>
    );
};

export default PieChart;