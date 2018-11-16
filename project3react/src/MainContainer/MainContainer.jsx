import React, {Component} from 'react';
import ChemCam from './CuriosityCameras/ChemcamContainer/ChemcamContainer';
import MastCamera from './CuriosityCameras/MastContainer/MastContainer';
import FhazCamera from './CuriosityCameras/FhazContainer/FhazContainer';
import RhazCamera from './CuriosityCameras/RhazContainer/RhazContainer';
import MahliCamera from './CuriosityCameras/MahliContainer/MahliContainer';
import MardiCamera from './CuriosityCameras/MardiContainer/MardiContainer';
import NavCam from './CuriosityCameras/NavContainer/NavContainer'
import Comments from './CuriosityCameras/CommentContainer/CommentContainer'
import CuriositySearch from './CuriosityPhotoList/CuriositySearch/CuriositySearch'
import Login from './LoginContainer/LoginContainer'
import {Container, Row, Col, Button} from 'reactstrap';

// import CuriosityPhotoList from './CuriosityPhotoList/CuriosityPhotoList';
//<CuriosityPhotoList curiosityPhotos={this.state.curiosity} />

class Curiosity extends Component {
    constructor() {
        super();
        this.state = {
                camera: {
                    fhaz: [],
                    rhaz: [],
                    chemcam: [],
                    mahli: [],
                    mardi: [],
                    mast: [],
                    nav: [],
                },
            sol: [],
            photoToComment: {
                _id: '',
                comments: '',
                photo_id: ''
            },
            open: false
        }
        this.onSelect = this.onSelect.bind(this)
    }
    getPhotos = async () => {
        try {
            const curiosity = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.state.sol + '&camera=' + this.state.camera + '&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl');
            const curiosityJson = await curiosity.json();
            return curiosityJson.photos
        } catch(err) {
            return(err)
        }
    } 
    // componentDidMount() {
        
    // }
    onOpenModal = () => {
        this.setState({ open: true });
      }
    onCloseModal = () => {
        this.setState({ open: false });
      }
      onSelect = (e) => {
          e.preventDefault();
          this.getPhotos().then((curiosity) => {
              console.log(curiosity, ' this is curious')
            this.setState({curiosity: curiosity});
          }).catch((err) => {
            console.log(err);
          });
      }
    render () {
        // const {open} = this.state;
        return (
            <Container className="main-container">
                <Row>
                    <Col md="4" id="CameraBlank"/>
                        <Col md="4" id="Cameras" className="column1 rounded">
                            <h1 className="display-3">Curious</h1>
                                <hr className="my-2" />
                                    <h3>A Curiosity Rover Photos App</h3>
                                        <hr className="my-2" />
                                            <small className="lead"><select onChange={this.onSelect}>{this.props.sol}</select></small>
                                    <br/>
                                        <hr className="my-2" />
                                            <Login /> &nbsp;
                                            <Button className="appbutton" outline color="info">Create Account</Button>
                                                <hr className="my-2"/>
                                                    <CuriositySearch curiositySearch={this.state.camera.fhaz} />
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