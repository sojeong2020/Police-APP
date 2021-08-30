import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <Link to='/statistics'><h3>Statistics</h3></Link>
            <Link to='/categories'><h3>Categories</h3></Link>
        </div>
    );
};

export default Nav;