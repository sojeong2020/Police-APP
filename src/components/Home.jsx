import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { ForceContext } from '../contexts/Force'; 
import Forces from './Forces';
import Dates from './Dates';
import {getCrimesByForceDate} from '../utils/api';

const Home = () => {
  const[crimes,setCrimes]=useState([])
  console.log(crimes)
  console.log(crimes.length)

  const {force}=useContext(ForceContext);  
 console.log(force,"<<<<<force from home")
 const {date}=useContext(ForceContext);  
 console.log(date,"<<<<< date from home")

 useEffect(()=>{
  getCrimesByForceDate(force.value,date.value).then((crimesFromApi)=>{

      setCrimes(crimesFromApi)
  })
},[force,date])

  return (
    <div>
      
      <Forces />
      <Dates />
      <h3>{crimes.length} crimes were reported in {force.value}.</h3>

    </div>
  );
};



export default Home;