import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Details from './components/Details';

class App extends Component {
  render () {
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/details" component={Details} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
