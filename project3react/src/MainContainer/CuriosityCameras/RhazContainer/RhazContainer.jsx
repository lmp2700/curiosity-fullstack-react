import React, {Component} from 'react'
import RhazCamList from './RhazList'
import Modal from 'react-responsive-modal';

class RhazCamera extends Component {
    constructor() {
        super();
            this.state = {
                rhazCam: [],
                open: false
            }
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
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render() {
        return (
            <div>
                <button onClick={this.onOpenModal}>Camera RHAZ</button>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <h1>Photos by Curiosity's Rear Hazard Avoidance Camera</h1>
                            <RhazCamList rhazCamList={this.state.rhazCam}/>
                    </Modal>
            </div>
        )
    }
}

export default RhazCamera;