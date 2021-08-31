import React , { useState, useEffect }from 'react';
import { getSearchesByForceDate} from '../utils/api';
import PieChart from '../charts/PieChart';
import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';

const StopSearch = ({force,date}) => {
    const[searches,setSearches] = useState([]);
    
    useEffect(()=>{
        getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
      
            setSearches(resultFromApi)
        })
      },[force,date])

    return (
        <div>
            <h2>Stop and search</h2>
            <PieChart searchData={searches}/>
            <BarChart searchData={searches}/>
            <LineChart searchData ={searches}/>

        </div>
    );
};

export default StopSearch;