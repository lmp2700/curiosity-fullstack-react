import React, {Component, Button} from 'react'
import ChemCamList from "./ChemcamList"
import Modal from 'react-responsive-modal';
import CommentContainer from '../CommentContainer/CommentContainer'


class ChemCam extends Component {
    constructor() {
        super();
        this.state = {
            chemcam: [],
            open: false
        }
    }
getChemPhotos = async () => {
    try {
        const chemCamPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=chemcam&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
        const chemCamPhotosJson = await chemCamPhotos.json();
        // console.log(chemCamPhotosJson)
        return chemCamPhotosJson.photos
    } catch(err) {
        return(err)
    }
}
componentDidMount() {
    this.getChemPhotos().then((chemcam) => {
        // console.log(chemcam, ' chemcamphotos')
        this.setState({chemcam: chemcam});
    }).catch((err) => {
        console.log(err)
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
                <button onClick={this.onOpenModal}>Camera CHEMCAM</button>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <h1>Photos by Curiosity's Chemistry and Camera Complex</h1>
                            <ChemCamList chemCamList={this.state.chemcam} />
                            <CommentContainer comments={this.state.comments}/>
                    </Modal>
            </div>
        )
    }
}

export default ChemCam;