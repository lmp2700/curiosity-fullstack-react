import React, {Component} from 'react'
import MardiPhotoList from './MardiList'
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class MardiCamera extends Component {
    constructor() {
        super();
        this.state = {
            mardi: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    getMardiPhotos = async () => {
        try {
            const mardiPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=mardi&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const mardiPhotosJson = await mardiPhotos.json();
            // console.log(mardiPhotosJson)
            return mardiPhotosJson.photos
        } catch(err) {
            return(err)
        } 
    }
    componentDidMount () {
        this.getMardiPhotos().then((mardiPhoto) => {
            // console.log(mardiPhoto, ' mardiphotos')
            this.setState({mardi: mardiPhoto})
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
                <Button outline color="info" size="lg" onClick={this.onOpenModal} block>Camera MARDI</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                        <h1>Photos by Mars Descent Imager</h1>
                            <MardiPhotoList mardiPhotosList={this.state.mardi}/>
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

export default MardiCamera;