import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainContainer from './MainContainer/MainContainer'
import LoginContainer from './MainContainer/LoginContainer/LoginContainer'
import CommentContainer from './MainContainer/CuriosityCameras/CommentContainer/CommentContainer'


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
          <Route exact path="/auth" component={LoginContainer}/>
          <Route exact path="/comments" component={CommentContainer} />
          <Route component={My404} />
        </Switch>
      </div>
    ); 
  }
}

export default App;