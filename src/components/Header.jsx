import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'




const Header = ({force,date}) => {

   

return (

    <header className="Header">

    <div className="Home">
    <Link className='Text-link' to ="/">
    <h3> <FontAwesomeIcon icon={faHome} /> UK POLICE </h3>
    </Link>
    </div>
   
    <div></div>
     <div className="Home_link">
     { <h3>{force.value} {date.value}</h3> }
     </div>

    </header>
        
)
}


export default Header;
