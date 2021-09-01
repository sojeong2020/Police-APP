import React ,{useState,useEffect} from 'react';
import { getSearchesByForceDate } from '../utils/api';
import { Bar } from "react-chartjs-2";

const BarChart = ({force,date}) => {
  const [chartData,setChartData]=useState({});
  console.log(chartData,"<<<< chartData from bar!")

useEffect(()=>{
    let outcomes=[];
    let counts ={}
    console.log(counts,"<<< counts from bar")
    let backgroundColor =[]
    console.log(backgroundColor,"<<<< background")


    getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
      console.log(resultFromApi,"searches before iterating from bar")
      resultFromApi.forEach(element => {
        if(element.outcome !== null || element.outcome !== "" ) {
          outcomes.push(element.outcome);
        }
         
      })

      outcomes.forEach(x=>counts[x]=(counts[x] || 0)+1 );
          
      Object.keys(counts).forEach(element =>{
        backgroundColor.push(counts.element = "#" + ((1<<24)*Math.random() | 0).toString(16))
     })
     // random color

        setChartData({
          labels: Object.keys(counts),
          datasets: [
            {
              label: "outcomes",
              data: Object.values(counts) ,
              fill: false,
              backgroundColor: backgroundColor,
              borderColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 1,
            }
          ]
        }); 
    }) 
  },[force,date])

  const options = {
       scale: {
        ticks: { beginAtZero: true },
      }, 

     };

  return (
      <div>
          <Bar  data={chartData} options={options}/> 
      </div>
  );
};

export default BarChart;

