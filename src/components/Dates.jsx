import React, { useState } from 'react';
import  { Form }  from 'react-bootstrap';


const Dates = () => {
    const [date,setDate]=useState('')
    console.log(date)

    const handleChange=(event)=>{
        setDate({value:event.target.value}) 
   }

   const handleSubmit=(event)=>{
        event.preventDefault();

   }

    return (
        <div>
             <Form value="submit" onSubmit={handleSubmit}>
               <Form.Label><p>Select Date</p></Form.Label>
                 <select onChange={handleChange}>
                 <option value="2021-07">2021-07 </option>
                 <option value="2021-06">2021-06 </option>
                 <option value="2021-05">2021-05</option>
                 <option value="2021-04">2021-04 </option>
                 <option value="2021-03">2021-03 </option>
                 <option value="2021-02">2021-02 </option>
                 <option value="2021-01">2021-01</option>
                 <option value="2020-12">2020-12 </option>
                 <option value="2020-11">2020-11 </option>
                 <option value="2020-10">2020-10 </option>
                 <option value="2020-09">2020-09 </option>
                 <option value="2020-08">2020-08 </option>
                 <option value="2020-07">2020-07 </option>
                 <option value="2020-06">2020-06 </option>
                 <option value="2020-05">2020-05 </option>
                 <option value="2020-04">2020-04 </option>
                 <option value="2020-03">2020-03 </option>
                 <option value="2020-02">2020-02 </option>
                 <option value="2020-01">2020-01 </option>
                 <option value="2019-12">2019-12 </option>
                 <option value="2019-11">2019-11 </option>
                 <option value="2019-10">2019-10 </option>
                 <option value="2019-09">2019-09 </option>
                 <option value="2019-08">2019-08 </option>
                 <option value="2019-07">2019-07 </option>
                </select>  
            </Form> 
        </div>
    );
};

export default Dates;