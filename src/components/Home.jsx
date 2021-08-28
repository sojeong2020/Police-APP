import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';





const Home = () => {


    return (
        
        <div>
            <h1>What's happening in your area?</h1>
            <h2>Find your local area </h2>
             <input></input>
             <div className="Map">
             <MapContainer center={[51.505, -0.09]} zoom={12}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
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