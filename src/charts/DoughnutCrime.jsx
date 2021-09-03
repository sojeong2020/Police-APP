import React,{useState,useEffect} from 'react';
import { getCrimesByForceDate} from '../utils/api';
import { Doughnut } from 'react-chartjs-2';

const DoughnutCrime = ({force,date}) => {
    const [chartData,setChartData]=useState({});

     useEffect(()=>{
        let outcomes=[];
        
        let counts = {};

        let backgroundColor =[]

        getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{
            
              resultFromApi.forEach(element => {
                  if(element.outcome_status !== null){
                    outcomes.push(element.outcome_status.category);
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
                    label: "types of crimes",
                    data: Object.values(counts) ,
                    fill: false,
                     backgroundColor: backgroundColor, 
                    
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