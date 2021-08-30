import React from 'react';
import {useState,useEffect} from 'react';
import { getCrimes,getCrimesBy,getCategories,getForces} from '../utils/api';

const Statistics = () => {
    const [categories, setCategories] = useState([]);
    const [forces, setForces] = useState([]);
    const [crimes, setCrimes] = useState([]);
    const [crimesBy, setCrimesBy] = useState([]);


useEffect(()=>{
        getCategories().then((resultFromApi)=>{
            console.log(resultFromApi)
            setCategories(resultFromApi) 
        })
    },[])

useEffect(()=>{
        getForces().then((resultFromApi)=>{
            console.log(resultFromApi)
            setForces(resultFromApi) 
        })
    },[])

 useEffect(()=>{
        getCrimes().then((resultFromApi)=>{
            console.log(resultFromApi)
            setCrimes(resultFromApi)
        })
    },[])

useEffect(()=>{
        getCrimesBy(category,force,date).then((resultFromApi)=>{
            console.log(resultFromApi)
             setCrimesBy(resultFromApi) 
        })
    },[])

    return (
        <div>
           <h1>select force</h1>
           <h1>select category</h1>
           <h1>select date</h1>
           

           
           


        </div>
    );
};

export default Statistics;