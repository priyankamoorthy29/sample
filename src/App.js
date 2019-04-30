import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProjectBoard from './components/ProjectBoard';
import ModuleBoard from './components/ModuleBoard';
import DefectBoard from './components/DefectBoard';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AddProjectTask from './components/ProjectTask/AddProjectTask';
import AddDefectTask from './components/DefectTask/AddDefectTask';
import Dashboard from './components/Dashboard';
import AddModuleTask from './components/ModuleTask/AddModuleTask';
import {Provider} from "react-redux"
import store from "./store"
import UpdateProjectTask from './components/ProjectTask/UpdateProjectTask';
import UpdateModuleTask from './components/ModuleTask/UpdateModuleTask';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">       
        <Navbar/>
       <Dashboard/>
       <Route exact path="/module" component={ModuleBoard}/>
       <Route exact path="/defect" component={DefectBoard}/>
        <Route exact path="/" component={ProjectBoard}/>
        <Route exact path="/addProjectTask" component={AddProjectTask}/>
      <Route exact path="/addModuleTask" component={AddModuleTask}/>
      <Route exact path="/addDefectTask" component={AddDefectTask}/>
      <Route exact path="/defect" component={AddDefectTask}/>
        <Route 
        exact 
        path="/updateProjectTask/:pt_id" 
        component={UpdateProjectTask}
        />
         <Route 
        exact 
        path="/updateModuleTask/:mt_id" 
        component={UpdateModuleTask}
        />


      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
