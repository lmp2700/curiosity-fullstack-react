import React, {Component} from 'react';
import CuriositySearch from './CuriosityPhotoList/CuriositySearch/CuriositySearch'
import Login from './LoginContainer/LoginContainer'
import {Container, Row, Col, Button} from 'reactstrap';

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
    }
    // onOpenModal = () => {
    //     this.setState({ open: true });
    //   }
    // onCloseModal = () => {
    //     this.setState({ open: false });
    //   }
    onSelect = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    render () {
        console.log(this.state.sol, ' this is sol')
        return (
            <Container className="main-container">
                <Row>
                    <Col md="4" id="CameraBlank"/>
                        <Col md="4" id="Cameras" className="column1 rounded">
                            <h1 className="display-3">Curious</h1>
                                <hr className="my-2" />
                                    <h3>A Curiosity Rover Photos App</h3>
                                        <hr className="my-2" />
                                            <small className="lead">Sol: <select onChange={this.onSelect}><option>{this.state.sol}</option></select></small>
                                                <br/>
                                                    <hr className="my-2" /> 
                                            <Login /> &nbsp;
                                            <Button className="appbutton" outline color="info">Create Account</Button>
                                                <hr className="my-2"/>
                                                    <CuriositySearch camera="fhaz" />
                                                    <CuriositySearch camera="rhaz" />
                                                    <CuriositySearch camera="chemcam" />
                                                    <CuriositySearch camera="mahli" />
                                                    <CuriositySearch camera="mardi" />
                                                    <CuriositySearch camera="mast" />
                                                    <CuriositySearch camera="nav" />
                                                <hr className="my-2"/>
                        </Col>          
                    <Col md="4" id="CameraBlank"/>
                </Row>
            </Container>
        )
    }
}

export default Curiosity;