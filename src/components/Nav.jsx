import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/statistics'><h3>Statistics</h3></Link>
            <Link to='/map'><h3>Crime Map</h3></Link>
            <Link to='/workforce'><h3>Police Workforce</h3></Link>
        </div>
    );
};

export default Nav;