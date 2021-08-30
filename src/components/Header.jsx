
import {Link} from 'react-router-dom'


const Header = () => {
    

    return (
        <div>
           <div>
           <Link to='/'><h1>UK Crimes </h1></Link>
           </div>
           <div>
               <h1>Force : 2020-07</h1>
           </div>

        </div>
    );
};

export default Header;