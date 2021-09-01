import React ,{useState,useEffect} from 'react';
import { getCrimesByForceDate} from '../utils/api';
import { Line } from "react-chartjs-2";
 

    
const LineChartCrime = ({force,date}) => {
    const [chartData,setChartData]=useState({});

    console.log(chartData,"<<<< chartData from line chart!")


    useEffect(()=>{
        let types=[];
        console.log(types,"<<< types")
        let outcome=[];
        console.log(outcome,"<<< outcome")
        let counts = {};

        getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{
            console.log(resultFromApi,"crime before iterating")
            for ( let dataObj of resultFromApi) {
                types.push(dataObj.category);
                outcome.push(dataObj.outcome_status);
              }
            
             types.forEach(x=>counts[x]=(counts[x] || 0)+1 );
             console.log(counts,"<<<<< conuts")
            
            setChartData({
                labels:Object.keys(counts),
                datasets: [
                  {
                    label: "types of crimes",
                    data: Object.values(counts),
                    
                  }
                ]
              });
              
        })
},[force,date])




    /* const data = {
    labels: ["red","blue","black","green"], //X
    datasets: [
      //frist data set
      {
        label: "Sales for 2021 (M)",
        data: [4,7,9,8,6], //data for each month Y
        backgroundColor: ["rgba(255, 200, 88, 0.3)"], //for style the line
        borderColor: ["rgba(255, 200, 88, 0.3)"],
        pointBackgroundColor: "rgba(255, 200, 88, 0.3)", // for style data point
        pointBorderColor: "rgba(255, 200, 88, 0.3)",
      },
      
    ],
  };
  */

  /* // for yAxes step size and title
  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0, //start at
            max: 6, //ended at
            stepSize: 1,
          },
        },
      ],
    },
  };  */

/*   return <Line data={chartData} options={options}></Line>;
 */ 
 return <Line data={chartData}></Line>;

}

    

export default LineChartCrime;