import React, {Component, Button} from 'react';
import ChemCam from './CuriosityCameras/ChemcamContainer/ChemcamContainer';
import MastCamera from './CuriosityCameras/MastContainer/MastContainer';
import FhazCamera from './CuriosityCameras/FhazContainer/FhazContainer';
import RhazCamera from './CuriosityCameras/RhazContainer/RhazContainer';
import MahliCamera from './CuriosityCameras/MahliContainer/MahliContainer'; // no photos, erroring out
import MardiCamera from './CuriosityCameras/MardiContainer/MardiContainer'; // no photos, erroring out
import NavCam from './CuriosityCameras/NavContainer/NavContainer'
import {Container, Row, Col} from 'reactstrap';
import Modal from 'react-responsive-modal';

// import CuriosityPhotoList from './CuriosityPhotoList/CuriosityPhotoList';
//<CuriosityPhotoList curiosityPhotos={this.state.curiosity} />

class Curiosity extends Component {
    constructor() {
        super();
        this.state = {
            curiosity: [],
            photoToComment: {
                _id: '',
                comments: '',
                photo_id: ''
            },
            open: false
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
            this.setState({curiosity: curiosity});
          }).catch((err) => {
            console.log(err);
          });
    }
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render () {
        const {open} = this.state;
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
                    <FhazCamera fhazcam={this.state.fhaz} />  
                </Col>
                <br/>
                <Col md="4" id="Camera2">
                    <RhazCamera rhazcamera={this.state.rhaz} />
                </Col>
          </Row>
          <Row>
                <Col md="4" id="Camera3">
                    <MastCamera mastcam={this.state.mast}/>
                </Col>
                <br/>
                <Col md="4" id="Camera4">
                    <ChemCam chemcam={this.state.chemcam}/>
                </Col>
                <br/>
                <Col md="4" id="Camera5">
                    <MahliCamera mahlicam={this.state.mahli} />
                </Col>
          </Row>
          <Row>
                <Col md="4" id="Camera6">
                    <MardiCamera mardicam={this.state.mardi} />
                </Col>
                <br/>
                <Col md="4" id="Camera7">
                    <NavCam navcam={this.state.nav} />
                </Col>
          </Row>
        </Container>
        )
    }
}

export default Curiosity;