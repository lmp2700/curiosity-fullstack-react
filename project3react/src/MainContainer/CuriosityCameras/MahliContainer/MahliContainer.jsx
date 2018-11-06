import React, {Component} from 'react'
import MahliList from './MahliList'
import Modal from 'react-responsive-modal';

class MahliCamera extends Component {
    constructor(){
        super();
        this.state = {
            mahli: [],
            open: false
        }
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
onOpenModal = () => {
    this.setState({ open: true });
  }; 
onCloseModal = () => {
    this.setState({ open: false });
  };
    render() {
    return (
        <div>
            <button onClick={this.onOpenModal}>Camera MAHLI</button>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h1>Photos by Curiosity's Mars Hand Lens Imager</h1>
                    <MahliList mahliPhotoList={this.state.mahli} />
                </Modal>
        </div>
            )
    }
}

export default MahliCamera;