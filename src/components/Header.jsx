import {useContext} from 'react';
import {PostCodeContext} from '../contexts/PostCode';
import {Link} from 'react-router-dom'


const Header = () => {
    const {postCode} = useContext(PostCodeContext);  
console.log(postCode,"<<<<<postCode from Header")

    return (
        <div>
           <div>
           <Link to='/'><h1>UK POLICE </h1></Link>
           </div>
           <div>
               <h1>{postCode.admin_ward}</h1>
           </div>

        </div>
    );
};

export default Header;