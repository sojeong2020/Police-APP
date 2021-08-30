import React from 'react';
import { useState, useEffect } from 'react';
import { getForces } from '../utils/api';
import  { Form }  from 'react-bootstrap';

const Forces = () => {
    const [forces,setForces]=useState([]);
    console.log(forces)
    const [force, setForce]= useState([])
    console.log(force)

    const handleChange=(event)=>{
         setForce({value:event.target.value}) 
    }

    const handleSubmit=(event)=>{
         event.preventDefault();

    }

    useEffect(()=>{
        getForces().then((forcesFromApi)=>{

            setForces(forcesFromApi)
        })
    },[])

    return (
        <div>
           

            <Form value="submit" onSubmit={handleSubmit}>
               <Form.Label><p>Select Force</p></Form.Label>
                 <select onChange={handleChange}>
                   {forces.map(force => 
                   <option key={force.id} value={force.id}>{force.name}</option>
                    )};
                 </select>  
            </Form> 

                   
        </div>
    );
};

export default Forces;