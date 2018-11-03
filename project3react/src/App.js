import React, { Component } from 'react';
import './App.css';
import Curiosity from './MainContainer/MainContainer'
// import { Route, Switch } from 'react-router-dom';
import {Container} from 'reactstrap';
import MainContainer from './MainContainer/MainContainer'
// import ChemCamContainer from './MainContainer/CuriosityCameras/ChemcamContainer'


// const My404 = () => {
//   return (
//     <div>
//       Curiosity isn't here
//     </div>
//     )
// };

// const App = () => {
//   return (
//     <main>
//       <Switch>
//         <Route exact path="/" component={ MainContainer } />
//         <Route exact path="/chemcam" component={ ChemCamContainer } />
//         <Route component={My404} />
//       </Switch>
//     </main>
//     )
// };

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
