import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { ForceContext } from '../contexts/Force';  
import Forces from './Forces';
import Dates from './Dates';
import {getSearchesByForceDate} from '../utils/api';

const Home = () => {
  const[searches,setSearches]=useState([])
  console.log(searches)
  console.log(searches.length)

  const {force}=useContext(ForceContext);  
  console.log(force,"<<<<<force from home")
  const {date}=useContext(ForceContext);  
  console.log(date,"<<<<< date from home") 

 useEffect(()=>{
  getSearchesByForceDate(force.value,date.value).then((resultFromApi)=>{

      setSearches(resultFromApi)
  })
},[force,date])

  return (
    <div>
      
      <Forces />
      <Dates />
      <h3>{searches.length} Stop and search was reported in {force.value} in {date.value}.</h3>
  
    </div>
  );
};



export default Home;