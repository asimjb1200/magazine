import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Details from './components/Details';
import AllNews from './components/AllNews';
import AddStories from './components/AddStories';

class App extends Component {
  render () {
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/all-news" component={AllNews} />
          <Route exact path="/add-stories" component={AddStories} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
