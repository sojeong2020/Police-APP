import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'


const Nav = () => {
    return (
        
        <navbar className="Navbar">
            <div className="Navbar-link">
            <Link className='Text-link' to="/stop">
            <h3><strong>Stop and search</strong> <span className="Nav-span"> <FontAwesomeIcon icon={faSearch} /></span> </h3>
            </Link>
            </div>
            
            <div className="Navbar-link">
            <Link className='Text-link' to = "/crimes">
            <h3><strong>Crimes</strong> <span className="Nav-span" ><FontAwesomeIcon icon={faSearch} /> </span> </h3>
            </Link>
            </div>
            
        </navbar>   
           
    );
};

export default Nav;