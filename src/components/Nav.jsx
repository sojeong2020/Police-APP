import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/crimes'><h3>Crimes</h3></Link>
            <Link to='/stop'><h3>Stop and search</h3></Link>
            
        </div>
    );
};

export default Nav;