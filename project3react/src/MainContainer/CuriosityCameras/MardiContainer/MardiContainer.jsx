import React, {Component} from 'react'
import MardiPhotoList from './MardiList'
import Modal from 'react-responsive-modal';
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button} from 'reactstrap'

class MardiCamera extends Component {
    constructor() {
        super();
        this.state = {
            mardi: [],
            open: false
        }
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
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <h1>Photos by Curiosity's Mars Descent Imager</h1>
                            <MardiPhotoList mardiPhotosList={this.state.mardi}/>
                            <CommentContainer comments={this.state.comments}/>
                </Modal>
            </div>
        )
    }
}

export default MardiCamera;