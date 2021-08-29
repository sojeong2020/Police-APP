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

  const [postCode, setPostCode]=useState({
    "latitude":"53.421759",
    "longitude": "-2.30875",
    "admin_ward":"Sale Moor"});

  return (
    <PostCodeContext.Provider value={{postCode,setPostCode}}>
    <div className="App">
        <Header postCode={postCode} />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home setPostCode={setPostCode}/>
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
