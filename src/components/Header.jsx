import React from 'react';
import {Link} from 'react-router-dom'


const Header = ({force,date}) => {
    
console.log(force,"<<<<<from header")
console.log(date,"<<<<<from header")

    return (
        <div>
           <div>
           <Link to='/'><h1>UK Crimes </h1></Link>
           </div>
           <div>
                <h1>{force.value} {date.value}</h1>
            </div>

        </div>
    );
};

export default Header;