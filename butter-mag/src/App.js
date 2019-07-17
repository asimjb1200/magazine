import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Details from './components/Details';
import AllNews from './components/AllNews';
import AllSports from './components/AllSports';
import AddStories from './components/AddStories';

class App extends Component {
  render () {
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/all-news" component={AllNews} />
          <Route exact path="/all-sports" component={AllSports} />
          <Route exact path="/add-stories" component={AddStories} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;
