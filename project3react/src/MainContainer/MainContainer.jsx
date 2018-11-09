import React, {Component} from 'react';
import ChemCam from './CuriosityCameras/ChemcamContainer/ChemcamContainer';
import MastCamera from './CuriosityCameras/MastContainer/MastContainer';
import FhazCamera from './CuriosityCameras/FhazContainer/FhazContainer';
import RhazCamera from './CuriosityCameras/RhazContainer/RhazContainer';
import MahliCamera from './CuriosityCameras/MahliContainer/MahliContainer';
import MardiCamera from './CuriosityCameras/MardiContainer/MardiContainer';
import NavCam from './CuriosityCameras/NavContainer/NavContainer'
import Comments from './CuriosityCameras/CommentContainer/CommentContainer'
import Login from './LoginContainer/LoginContainer'
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
            <Container className="main-container">
                <Row>
                    <Col md="4" id="CameraBlank"/>
                        <Col md="4" id="Cameras" className="column1">
                            <h1 className="display-3">Curious</h1>
                                <hr className="my-2" />
                                    <h3>Curiosity Rover Photos App</h3>
                                        <hr className="my-2" />
                                            <small className="lead">Sol 355</small>
                                    <br/>
                                        <hr className="my-2" />
                                            <Login /> &nbsp;
                                            <Button className="appbutton" outline color="info">Create Account</Button>
                                                <hr className="my-2"/>
                                                    <FhazCamera fhazcam={this.state.fhaz} /> 
                                                    <RhazCamera rhazcamera={this.state.rhaz} />
                                                    <MastCamera mastcam={this.state.mast}/>
                                                    <ChemCam chemcam={this.state.chemcam}/>
                                                    <MahliCamera mahlicam={this.state.mahli} />
                                                    <MardiCamera mardicam={this.state.mardi} />
                                                    <NavCam navcam={this.state.nav} />
                                                        <hr className="my-2"/>
                        </Col>          
                    <Col md="4" id="CameraBlank"/>
                </Row>
        </Container>
        )
    }
}

export default Curiosity;