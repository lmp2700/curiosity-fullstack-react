import React, {Component} from 'react'
import FhazPhotosList from './FhazList'
import Modal from 'react-responsive-modal';
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button} from 'reactstrap'

class FhazCamera extends Component {
    constructor() {
        super();
        this.state = {
            fhaz: [],
            open: false
        }
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
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        return(
            <div>
                <Button outline color="info" size="lg" onClick={this.onOpenModal} block>Camera FHAZ</Button>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                            <h1>Photos by Curiosity's Front Hazard Avoidance Camera</h1>
                                <FhazPhotosList fhazPhotosList={this.state.fhaz}/>
                                <CommentContainer comments={this.state.comments}/>
                    </Modal>
            </div>
        )
    }
}

export default FhazCamera;