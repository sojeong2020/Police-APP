import './App.css';
import {useState} from 'react';
import {Route,Switch } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Statistics from './components/Statistics';
import Categories from './components/Categories';
import Footer from './components/Footer';



function App() {

  
  return (
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

          <Route path="/Categories">
            <Categories />
          </Route>
        </Switch>

        <Footer />
    </div> 
  );
}

export default App;
