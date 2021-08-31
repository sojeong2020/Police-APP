import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {ForceContext} from './contexts/Force';
import {Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Forces from './components/Forces';
import Dates from './components/Dates';
import StopSearch from './components/StopSearch';
import Crimes from './components/Crimes';
import Footer from './components/Footer';



function App() {
  const [force, setForce]= useState('');
  const [date,setDate]=useState('')

  console.log(force,"<<<<app.js")
  console.log(date,"<<<<app.js")

  return (
    <ForceContext.Provider value={{force,date,setForce,setDate}}>
    <div className="App">
        <Header force={force}date={date} />
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home force={force}date={date}/>
          </Route>

          <Route exact path="/stops-force/:force/:date">
            <Home />
          </Route>

          <Route exact path="/forces">
            <Forces setForce={setForce}/>
          </Route>

          <Route exact path="/dates">
            <Dates />
          </Route>

          <Route path="/stop">
            <StopSearch force={force}date={date} />
          </Route>

          <Route path="/crimes">
            <Crimes force={force}date={date} />
          </Route>
        </Switch>

        <Footer />
    </div> 
    </ForceContext.Provider>
  );
}

export default App;
