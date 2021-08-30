import './App.css';
import {useState} from 'react';
import {PostCodeContext} from './contexts/PostCode';
import {Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Statistics from './components/Statistics';
import CrimeMap from './components/CrimeMap';
import Workforce from './components/Workforce';
import Footer from './components/Footer';



function App() {
  const [post,setPost]=useState("m342lw")

  const [postCode, setPostCode]=useState({
    "latitude":"53.454168",
    "longitude": "-2.15228",
    "admin_ward":"Denton West"});

  return (
    <PostCodeContext.Provider value={{postCode,post,setPostCode,setPost}}>
    <div className="App">
        <Header postCode={postCode} />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home setPostCode={setPostCode} position={[postCode.latitude, postCode.longitude]} admin_ward={postCode.admin_ward}
            post={post}setPost={setPost}/>
          </Route>

          <Route path="/statistics">
            <Statistics />
          </Route>

          <Route path="/map">
            <CrimeMap />
          </Route>

          <Route path="/workforce">
            <Workforce />
          </Route>

        </Switch>

        <Footer />
    </div> 
    </PostCodeContext.Provider>
  );
}

export default App;
