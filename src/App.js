import './App.css';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Statistics from './components/Statistics';
import CrimeMap from './components/CrimeMap';
import Workforce from './components/Workforce';
import Footer from './components/Workforce';



function App() {
  return (
    <Router>
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
          <Route path="/CrimeMap">
            <CrimeMap />
          </Route>
          <Route path="/Workforce">
            <Workforce />
          </Route>
        </Switch>
        <Footer />
      </div>
      </Router>  
  );
}

export default App;
