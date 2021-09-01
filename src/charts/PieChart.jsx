import React ,{useState,useEffect} from 'react';
import { getSearchesByForceDate } from '../utils/api';
import { Pie  } from "react-chartjs-2";


const PieChart = ({force,date}) => {
  const [chartData,setChartData]=useState({});
    console.log(chartData,"<<<< chartData from radar!")

  useEffect(()=>{
      let ethnicity=[];
      let counts ={}
      console.log(counts,"<<< count from radar")
      let backgroundColor =[]
      console.log(backgroundColor,"<<<< background")


      getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
        console.log(resultFromApi,"searches before iterating from radar")
        resultFromApi.forEach(element => {
          if(element.self_defined_ethnicity !== null) {
            ethnicity.push(element.self_defined_ethnicity);
          }
           
        })

        ethnicity.forEach(x=>counts[x]=(counts[x] || 0)+1 );
            
        Object.keys(counts).forEach(element =>{
          backgroundColor.push(counts.element = "#" + ((1<<24)*Math.random() | 0).toString(16))
       })
       // random color

          setChartData({
            labels: Object.keys(counts),
            datasets: [
              {
                label: "ethnicity",
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
            <Pie  data={chartData} options={options}/> 
        </div>
    );
};

export default PieChart;