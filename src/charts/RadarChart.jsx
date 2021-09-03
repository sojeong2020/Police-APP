import React ,{useState,useEffect} from 'react';
import { getSearchesByForceDate } from '../utils/api';
import { Radar } from 'react-chartjs-2';

const RadarChart = ({force,date}) => {
    const [chartData,setChartData]=useState({});

  useEffect(()=>{
      let age=[];
      let counts ={}

      getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
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

       
      };

    return (
        <div>
            <Radar data={chartData} options={options}/> 
        </div>
    );
};

export default RadarChart;