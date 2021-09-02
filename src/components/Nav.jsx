import React from 'react';
import {Link} from 'react-router-dom'



const Nav = () => {
    return (
        
        <navbar className="Navbar">
            <div className="Navbar-link">
            <Link className='Text-link' to="/stop">
            <h3><strong>Stop and search</strong></h3>
            </Link>
            </div>
            
            <div className="Navbar-link">
            <Link className='Text-link' to = "/crimes">
            <h3><strong>Crimes</strong> </h3>
            </Link>
            </div>
            
        </navbar>   
           
    );
};

export default Nav;