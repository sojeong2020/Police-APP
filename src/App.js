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
    "latitude":" 52.643950",
    "longitude": "-1.143042"});

  return (
    <PostCodeContext.Provider value={{postCode,setPostCode}}>
    <div className="App">
        <Header />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
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
