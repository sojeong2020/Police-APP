import React from 'react';
import {useState,useEffect,useContext} from 'react';
import { PostCodeContext } from '../contexts/PostCode';
import { getPostCode} from '../utils/api';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Home = () => {
   const [postCode,setPostCode]=useState([]);

  /*  const {setPostCode} = useContext(PostCodeContext);  */

   useEffect(()=>{
    getPostCode().then((postCodeFromApi)=>{
               setPostCode(postCodeFromApi)
      })
  },[])


    return (
        
    <div>
      <p>{postCode.admin_ward}</p>
          <h1>What's happening in your area?</h1>
          <h2>Find your local area </h2>
          <input></input>
          
        <div className="Map">
        <MapContainer center={[52.634407, -1.133653]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker position={[52.634407, -1.133653]}>
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