import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Login from "./Pages/Login.js";
import Register from "./Pages/Register.js"
import Main from "./Pages/Main.js";

 function App() {        
      return ( 
        <main>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Main} />
          </Switch>
        </main> 
      ); 
    } 

  export default App;
