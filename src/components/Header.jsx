import React from 'react';
import {Link} from 'react-router-dom'


const Header = ({force,date}) => {
    
console.log(force,"<<<<<from header")
console.log(date,"<<<<<from header")

    return (
        <div>
           <div>
           <Link to='/'><h1>UK STOP AND SEARCH </h1></Link>
           </div>
           <div>
                <h3>{force.value} {date.value}</h3>
            </div>

        </div>
    );
};

export default Header;