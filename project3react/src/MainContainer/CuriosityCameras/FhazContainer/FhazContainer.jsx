import React, {Component} from 'react'
import FhazPhotosList from './FhazList'
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class FhazCamera extends Component {
    constructor() {
        super();
        this.state = {
            fhaz: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    getFhazPhotos = async () => {
        try {
            const fhazPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=fhaz&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const fhazPhotosJson = await fhazPhotos.json();
            // console.log(fhazPhotosJson)
            return fhazPhotosJson.photos
        } catch (err) {
            return(err)
        }
    }
    componentDidMount() {
        this.getFhazPhotos().then((fhazPhotos) => {
            // console.log(fhazPhotos, ' fhazphotos')
            this.setState({fhaz: fhazPhotos})
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
        return(
            <div>
                <Button outline color="info" className="appbutton" size="lg" onClick={this.toggle} block>Camera FHAZ</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by Front Hazard Avoidance Camera</h1>
                                <FhazPhotosList fhazPhotosList={this.state.fhaz}/>
                        </ModalBody>
                            <ModalFooter>
                                <CommentContainer comments={this.state.comments}/>
                            </ModalFooter>
                        <Button color="info" onClick={this.toggle}>Close</Button>
                    </Modal>
            </div>
        )
    }
}

export default FhazCamera;