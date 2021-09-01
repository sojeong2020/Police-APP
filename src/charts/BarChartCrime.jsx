import React,{useState,useEffect} from 'react';
import { getCrimesByForceDate} from '../utils/api';
import { Bar } from "react-chartjs-2";
 

    
const BarChartCrime = ({force,date}) => {
    const [chartData,setChartData]=useState({});

    //console.log(chartData,"<<<< chartData from line chart!")


    useEffect(()=>{
        let types=[];
        //console.log(types,"<<< types")
        
        let counts = {};

        getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{
            //console.log(resultFromApi,"crime before iterating")
            
              resultFromApi.forEach(element => {
                  types.push(element.category);
              })
            
             types.forEach(x=>counts[x]=(counts[x] || 0)+1 );
            // console.log(counts,"<<<<< conuts")
            
            setChartData({
                labels: Object.keys(counts),
                datasets: [
                  {
                    label: "types of crimes",
                    data: Object.values(counts) ,
                    fill: false,
                    backgroundColor: 'rgba(83, 65, 167, 1)',
                    borderColor: 'rgba(255, 99, 132, 0.2)',
                    
                  }
                ]
              });
              
        })
},[force,date])

/* const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }; */

  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Crime types description',
      },
    },
  };
  
return(
    <Bar data={chartData} options={options}></Bar>
 );
 

}

    

export default BarChartCrime;