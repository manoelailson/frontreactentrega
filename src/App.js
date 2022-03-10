import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Destinos from './components/pages/Destinos';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container" >
                    <Switch> 
                          <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/Contato" exact component = {Contato}></Route>
                          <Route path = "/Destinos" exact component = {Destinos}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;