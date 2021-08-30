import React from 'react';
import {useState,useEffect,useContext} from 'react';
import { PostCodeContext } from '../contexts/PostCode';
import { getPostCode} from '../utils/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';



const Home = (props) => {
   console.log(props,"<<<props")
   console.log(props.position,"<<<props.position")
  
  const [location,setLocation]=useState([]);
  const [post,setPost]=useState("");

  const {setPostCode} = useContext(PostCodeContext);  
   console.log(location,"location from Home.jsx")

  useEffect(()=>{
  getPostCode(props.post).then((resultFromApi)=>{
    console.log(resultFromApi,"<<<<getpostfromAPi")
               setLocation(resultFromApi)
      })
  },[])  

 const handleSubmit = (event) => {
    
    event.preventDefault();
   
     
  }; 

    
 
    
    return (
        
    <div>
      
      <form onSubmit={handleSubmit}>
       <label>
       Find your local area
        <input
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
       </label>
       <button type="submit">search</button>
      </form>

        
        <div className="Map">
        <MapContainer center={props.position}zoom={12} >

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={props.position}>
                    
         <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> 
        </Marker>
        </MapContainer>
       </div> 

    </div> 
          
        
    );
};
 
export default Home;