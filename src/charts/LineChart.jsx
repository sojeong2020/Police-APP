import React ,{useState,useEffect} from 'react';
import { getSearchesByForceDate } from '../utils/api';
import { Bar } from "react-chartjs-2";


const LineChart = ({force,date}) => {
  const [chartData,setChartData]=useState({});
    console.log(chartData,"<<<< chartData from radar!")

  useEffect(()=>{
      let age=[];
      let counts ={}
      console.log(counts,"<<< count from radar")

      getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
        console.log(resultFromApi,"searches before iterating from radar")
        resultFromApi.forEach(element => {
          if(element.age_range !== null) {
            age.push(element.age_range);
          }
           
        })

        age.forEach(x=>counts[x]=(counts[x] || 0)+1 );
            


          setChartData({
            labels: Object.keys(counts),
            datasets: [
              {
                label: "age range",
                data: Object.values(counts) ,
                fill: false,
                backgroundColor: 'rgba(83, 65, 167, 1)',
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
            <Bar data={chartData} options={options}/> 
        </div>
    );
};

export default LineChart;