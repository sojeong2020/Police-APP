import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { ForceContext } from '../contexts/Force';  
import Forces from './Forces';
import Dates from './Dates';
import {getSearchesByForceDate,getCrimesByForceDate} from '../utils/api';

const Home = () => {
  const[searches,setSearches]=useState([])
  const[crimes,setCrimes]=useState([])

  const {force}=useContext(ForceContext);  
  const {date}=useContext(ForceContext);  

  


 useEffect(()=>{
   
  getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{
    
    setSearches(resultFromApi)
  })
},[force,date])

useEffect(()=>{
  getCrimesByForceDate(force.value,date.value).then((resultFromApi)=>{

      setCrimes(resultFromApi)
  })
},[force,date])

return (
    <div>
      
      <Forces />
      <Dates />

     
      
      <h3>{searches.length} Stop and search was reported in {force.value} in {date.value}.</h3>
      <h3>{crimes.length} Crimes were reported in {force.value}.</h3>

     

    </div>
  );
};

export default Home;


