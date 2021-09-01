import React ,{useState,useEffect} from 'react';
import { getSearchesByForceDate } from '../utils/api';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({force,date}) => {
    const [chartData,setChartData]=useState({});
    console.log(chartData,"<<<< chartData from radar!")

  useEffect(()=>{
      let age=[];
      let counts ={}
      console.log(counts,"<<< count from radar")

      getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
        console.log(resultFromApi,"searches before iterating from radar")
        resultFromApi.forEach(element => {
            age.push(element.age_range);
        })

        age.forEach(x=>counts[x]=(counts[x] || 0)+1 );
            


          setChartData({
            labels: Object.keys(counts),
            datasets: [
              {
                label: "age range",
                data: Object.values(counts) ,
                fill: false,
                backgroundColor: 'rgba(2, 31, 7, 1)',
                borderColor: 'rgba(7, 110, 25, 1)',
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

       /*  scale: {
            ticks: {
              min: 0,
              max: 16,
              stepSize: 2,
              showLabelBackdrop: false,
              backdropColor: "rgba(203, 197, 11, 1)"
            },
            angleLines: {
              color: "rgba(255, 255, 255, .3)",
              lineWidth: 1
            },
            gridLines: {
              color: "rgba(255, 255, 255, .3)",
              circular: true
            }
          } */
      };

    return (
        <div>
            <Radar data={chartData} options={options}/> 
        </div>
    );
};

export default RadarChart;