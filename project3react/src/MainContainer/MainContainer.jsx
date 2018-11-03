import React, {Component} from 'react'
// import CuriosityPhotoList from './CuriosityPhotoList/CuriosityPhotoList';
import ChemCam from './CuriosityCameras/ChemcamContainer/ChemcamContainer';
import {Container, Row, Col} from 'reactstrap';

//<CuriosityPhotoList curiosityPhotos={this.state.curiosity} />

class Curiosity extends Component {
    constructor() {
        super();
        this.state = {
            curiosity: []
        }
    }
    getPhotos = async () => {
        try {
            const curiosity = await fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl');
            const curiosityJson = await curiosity.json();
            return curiosityJson.photo_manifest.photos
        } catch(err) {
            return(err)
        }
    } 
    componentDidMount() {
        this.getPhotos().then((curiosity) => {
            console.log(curiosity, ' this is curious');
            this.setState({curiosity: curiosity});
          }).catch((err) => {
            console.log(err);
          });
    }
    onClick = (e) => {
        e.preventDefault();
        console.log('clicked')
    }
    render () {
        return (
            <Container>
            <Row>
                <div>
                    <h1>Photos by Curiosity Rover on Sol 355</h1>
                    <h2>August 5, 2013 ~ Happy Birthday, Curiosity</h2>
                </div>
            </Row>
            <Row>
                <Col md="4" id="Camera1">
                    <button onClick={this.onClick}>Camera FHAZ</button>
                </Col>
                <Col md="4" id="Camera2">
                    <button onClick={this.onClick}>Camera RHAZ</button>
                </Col>
          </Row>
          <Row>
                <Col md="4" id="Camera3">
                    <button onClick={this.onClick}>Camera MAST</button>
                </Col>
                <Col md="4" id="Camera4">
                    <button onClick={this.onClick}>Camera CHEMCAM</button>
                </Col>
          </Row>
          <Row>
                <Col md="4" id="Camera5">
                    <button onClick={this.onClick}>Camera MAHLI</button>
                </Col>
                <Col md="4" id="Camera6">
                    <button onClick={this.onClick}>Camera MARDI</button>
                </Col>
                <Col md="4" id="Camera7">
                    <button onClick={this.onClick}>Camera NAVCAM</button>
                </Col>
          </Row>
        </Container>
        )
    }
}

export default Curiosity;