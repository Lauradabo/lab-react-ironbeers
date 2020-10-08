import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Beers from "./pages/Beers.jsx";
import RandomBeer from "./pages/RandomBeer.jsx";
import NewBeer from "./pages/NewBeer.jsx";
import OneBeer from './pages/OneBeer.jsx';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/new-beer" component={NewBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}

export default App;
