import React, { Component } from 'react';
import './App.css';
import Curiosity from './MainContainer/MainContainer'
import {Container, Row, Column} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <container>
        <row>
          <Col md="4" className="App">
            <h4>Photos by Curiosity</h4>
          </Col>
          <div id="Camera1">
            <h1>Camera FHAZ</h1>
          </div>
          <div id="Camera2">
            <h1>Camera RHAZ</h1>
          </div>
        </row>
        <row>
          <div id="Camera3">
            <h1>Camera MAST</h1>
          </div>
          <div id="Camera4">
            <h1>Camera CHEMCAM</h1>
          </div>
        </row>
        <row>
          <div id="Camera5">
            <h1>Camera MAHLI</h1>
          </div>
          <div id="Camera6">
            <h1>Camera MARDI</h1>
          </div>
          <div id="Camera7">
            <h1>Camera NAVCAM</h1>
          </div>
        </row>
      </container>
    ); 
  }
}
console.log('after')
export default App;
