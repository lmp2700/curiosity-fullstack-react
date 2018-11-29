import React, {Component} from 'react'
import RhazCamList from './RhazList'
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class RhazCamera extends Component {
    constructor() {
        super();
            this.state = {
                rhazCam: [],
                modal: false
            }
            this.toggle = this.toggle.bind(this);
    }
    getRhazPhotos = async () => {
        try {
            const rhazCamPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=rhaz&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const rhazCamPhotosJson = await rhazCamPhotos.json();
            // console.log(rhazCamPhotosJson)
            return rhazCamPhotosJson.photos
        } catch(err) {
            return(err)
        }
    }
    componentDidMount() {
        this.getRhazPhotos().then((rhazCam) => {
            // console.log(rhazCam, ' rhazcamphotos')
            this.setState({rhazCam: rhazCam})
        }).catch((err) => {
            console.log(err)
        })
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        return (
            <div>
                <Button outline color="info" className="appbutton" size="lg" onClick={this.toggle} block>Camera RHAZ</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by Rear Hazard Avoidance Camera</h1>
                                <RhazCamList rhazCamList={this.state.rhazCam}/>
                        </ModalBody>
                        <ModalFooter>
                            <CommentContainer comments={this.state.comments}/>
                            <br/>
                        </ModalFooter>
                            <Button color="info" onClick={this.toggle}>Close</Button>     
                    </Modal>
            </div>
        )
    }
}

export default RhazCamera;