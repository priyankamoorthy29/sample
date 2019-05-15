import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './components/login';
import Signup from './components/SignUp/SignUp';
import SignUp from './components/SignUp/SignUp';


class App extends Component {
  render() {
    return (
    
      <Router>
      <div className="App">       
       
      <Login />
      <Signup/>

      <Route path="/Login" component={SignUp} />



      </div>
      </Router>
    
    );
  }
}

export default App;
