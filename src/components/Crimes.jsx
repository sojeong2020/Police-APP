import React ,{useState,useEffect} from 'react';
import { getCrimesByForceDate } from '../utils/api';
import PieChartCrime from '../charts/PieChartCrime';

const Crimes = ({force,date}) => {
    console.log(force,"<<<<from crimes")
    console.log(date,"<<<<from crimes")


    const[crimes,setCrimes] = useState([]);
    console.log(crimes,"<<<< crimes")


    useEffect(()=>{
        getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{
      
            setCrimes(resultFromApi)
        })
      },[force,date])

    return (
        <div>
            <h2>Crimes</h2>
            <h3>Crimes by categories</h3>
            <PieChartCrime crimeData={crimes}/>
        </div>
    );
};

export default Crimes;