import React from 'react';
import logo from './logo.svg';
import {Switch,Route,HashRouter,} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Menu from "./Components/Menu"
import Chinchon from "./Pages/Chinchon"
import Escoba from "./Pages/Escoba"
import Generala from "./Pages/Generala"
import Chorizo from "./Pages/Chorizo"
import './App.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Menu}/>
        <Route exact path="/Chinchon" component={Chinchon}/>
        <Route exact path="/Escoba" component={Escoba}/>
        <Route exact path="/Generala" component={Generala}/>
        <Route exact path="/Chorizo" component={Chorizo}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
