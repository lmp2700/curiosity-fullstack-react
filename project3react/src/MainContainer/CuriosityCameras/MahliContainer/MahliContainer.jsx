import React, {Component} from 'react'
import MahliList from './MahliList'
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class MahliCamera extends Component {
    constructor(){
        super();
        this.state = {
            mahli: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    getMahliPhotos = async () => {
        try {
        const mahliPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=mahli&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
        const mahliPhotosJson = await mahliPhotos.json();
        // console.log(mahliPhotosJson, ' MAHLI Photos')
        return mahliPhotosJson.photos
    } catch(err) {
        return (err)
    }
}
componentDidMount() {
    this.getMahliPhotos().then((mahlicam) => {
        // console.log(mahlicam, ' mahliphotos')
        this.setState({mahli: mahlicam})
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
            <Button outline color="info" size="lg" onClick={this.toggle} block>Camera MAHLI</Button>
                <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                    <ModalBody>
                        <h1>Photos by Mars Hand Lens Imager</h1>
                        <MahliList mahliPhotoList={this.state.mahli} />
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

export default MahliCamera;