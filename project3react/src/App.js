import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './MainContainer/MainContainer'


const My404 = () => {
  return (
    <div>
      Curiosity isn't here
    </div>
    )
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route component={My404} />
        </Switch>
      </div>
    ); 
  }
}

export default App;