import React,{useState,useEffect} from 'react';
import { getCrimesByForceDate} from '../utils/api';
import { Bar } from "react-chartjs-2";
 

    
const BarChartCrime = ({force,date}) => {
    const [chartData,setChartData]=useState({});



    useEffect(()=>{
        let types=[];
        
        let counts = {};

        getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{
            
              resultFromApi.forEach(element => {
                  types.push(element.category);
              })
            
             types.forEach(x=>counts[x]=(counts[x] || 0)+1 );
            
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



  const options = {
    indexAxis: 'y',
    
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