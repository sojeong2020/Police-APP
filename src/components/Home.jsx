import React, { useState,useEffect } from 'react';
import { useContext } from 'react';
import { ForceContext } from '../contexts/Force';  
import Forces from './Forces';
import Dates from './Dates';
import {getSearchesByForceDate,getCrimesByForceDate} from '../utils/api';
import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSearch} from '@fortawesome/free-solid-svg-icons'

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
      <div className="Home-select">
        <div className="Home-title"><h2><span className="Home-icon"><FontAwesomeIcon icon={faCheckCircle} /></span><strong>Please select force and date first.</strong></h2></div>
      <Forces />
      <Dates />
      </div>

     
      <div className="Home-result">

      <h3><FontAwesomeIcon icon={faCheckCircle} /><span className="Home-text">{searches.length}</span> Stop and search was reported in <span className="Home-text">{force.value}</span> in <span className="Home-text">{date.value}</span>.</h3>
        
        <div className="Home-link">
            <Link className='Text-link' to="/stop">
            <h3><strong>See more</strong> <span className="Home-link-span"> <FontAwesomeIcon icon={faSearch} /></span> </h3>
            </Link>
        </div>

      <h3><FontAwesomeIcon icon={faCheckCircle} /><span className="Home-text">{crimes.length}</span> Crimes were reported in <span className="Home-text">{force.value}</span>.</h3>
        
        <div className="Home-link">
            <Link className='Text-link' to = "/crimes">
            <h3><strong>See more</strong> <span className="Home-link-span" ><FontAwesomeIcon icon={faSearch} /> </span> </h3>
            </Link>
        </div>
      
      </div>
     

    </div>
  );
};

export default Home;


