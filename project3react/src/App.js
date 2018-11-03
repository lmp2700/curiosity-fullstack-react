import React, { Component } from 'react';
import './App.css';
import Curiosity from './MainContainer/MainContainer'
import {Container} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Curiosity />
      </Container>
    ); 
  }
}

export default App;
