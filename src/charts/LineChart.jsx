import React ,{useState,useEffect} from 'react';
import { Line } from "react-chartjs-2";


const LineChart = (props) => {
    const searchData = props.searchData


    const [ dataChart, setDataChart ] = useState ({});

   useEffect(() => {
    console.log(searchData,"<<< from linechart")

      let age = [];
      let gender = [];

        for ( let dataObj of searchData) {
            age.push(parseInt(dataObj.age_range));
            gender.push(dataObj.gender);
          
      }; 
      setDataChart({ 
        labels: gender, 
        datasets: [{ 
          label: 'gender and age', 
          data: age 
        }]
      });

    
  }, [])


  return( 
    <div className='container'>
      <Line data={ dataChart }/> 
    </div>
  )
}  

    /* useEffect(()=>{
        let ages=[];
        let gender=[];
        
            for ( let dataObj of searchData) {
                ages.push(dataObj.age_range);
                gender.push(dataObj.gender);
              }
            
            setChartData({
                labels:gender,
                datasets: [
                  {
                    label: "types of crimes",
                    data: ages,
                    
                  }
                ]
            });
        
    },[])

    return( 
        <div className='container'>
          <Line data={ dataChart }/> 
        </div>
      )
}; */

export default LineChart;