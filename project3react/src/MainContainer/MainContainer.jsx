import React, {Component} from 'react';
import ChemCam from './CuriosityCameras/ChemcamContainer/ChemcamContainer';
import MastCamera from './CuriosityCameras/MastContainer/MastContainer';
import FhazCamera from './CuriosityCameras/FhazContainer/FhazContainer';
import RhazCamera from './CuriosityCameras/RhazContainer/RhazContainer';
import MahliCamera from './CuriosityCameras/MahliContainer/MahliContainer';
import MardiCamera from './CuriosityCameras/MardiContainer/MardiContainer';
import NavCam from './CuriosityCameras/NavContainer/NavContainer'
import {Container, Row, Col, Button} from 'reactstrap';

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
                            <h1 className="display-3">Curiosity Rover Photos</h1>
                                <p className="lead">Photos by Curiosity Rover on Sol 355</p>
                                    <br/>
                                <p>
                                    <Button outline color="info">Login</Button>
                                    <Button outline color="info">Create Account</Button>
                                </p>
                                    <hr className="my-2" />          
                    </div>
                </Row>
          <Row>
                <Col md="4" id="CameraBlank"></Col>
                <br/>
                <Col md="4" id="Cameras">
                    <FhazCamera fhazcam={this.state.fhaz} /> 
                    <RhazCamera rhazcamera={this.state.rhaz} />
                    <MastCamera mastcam={this.state.mast}/>
                    <ChemCam chemcam={this.state.chemcam}/>
                    <MahliCamera mahlicam={this.state.mahli} />
                    <MardiCamera mardicam={this.state.mardi} />
                    <NavCam navcam={this.state.nav} />
                </Col>
                <br/>
                <Col md="4" id="CameraBlank"></Col>
          </Row>
        </Container>
        )
    }
}

export default Curiosity;