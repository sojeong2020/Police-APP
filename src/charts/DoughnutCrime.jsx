import React,{useState,useEffect} from 'react';
import { getCrimesByForceDate} from '../utils/api';
import { Doughnut } from 'react-chartjs-2';

const DoughnutCrime = ({force,date}) => {
    const [chartData,setChartData]=useState({});

    console.log(chartData,"<<<< chartData from line chart!")


    useEffect(()=>{
        let outcomes=[];
        console.log(outcomes,"<<< outcomes")
        
        let counts = {};

        let backgroundColor =[]
        console.log(backgroundColor,"<<<< background")

        getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{
            console.log(resultFromApi,"crime before iterating")
            
              resultFromApi.forEach(element => {
                  if(element.outcome_status !== null){
                    outcomes.push(element.outcome_status.category);
                  }
                  
              })
            
             outcomes.forEach(x=>counts[x]=(counts[x] || 0)+1 );
             console.log(counts,"<<<<< conuts")

             Object.keys(counts).forEach(element =>{
                backgroundColor.push(counts.element = "#" + ((1<<24)*Math.random() | 0).toString(16))
             })

            
            
            setChartData({
                labels: Object.keys(counts),
                datasets: [
                  {
                    label: "types of crimes",
                    data: Object.values(counts) ,
                    fill: false,
                     backgroundColor: backgroundColor, 
                    /* borderColor: 'rgba(255, 99, 132, 0.2)', */
                    
                  }
                ]
              });
              
        })
},[force,date])


 
  

return(
    <Doughnut data={chartData} ></Doughnut>
 );
 
    }
    


export default DoughnutCrime;