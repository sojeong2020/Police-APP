import React from 'react';
import {useState,useEffect} from 'react';
import { getOutcomes } from '../utils/api';


const CrimeMap = () => {
    const [outcomes, setOutcomes] = useState([]);

    useEffect(()=>{
        getOutcomes().then((outcomesFromApi)=>{
            setOutcomes(outcomesFromApi)
        })
    },[])

    return (
        <div>
            <h1>crime map</h1>
            <h3>{outcomes.length} crimes were reported here in </h3>
        </div>
    );
};

export default CrimeMap;