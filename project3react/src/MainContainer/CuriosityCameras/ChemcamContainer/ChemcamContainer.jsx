import React, {Component} from 'react'
import ChemCamList from "./ChemcamList"
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class ChemCam extends Component {
    constructor() {
        super();
        this.state = {
            chemcam: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
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
                <Button outline color="info" size="lg" className="modalbutton" onClick={this.toggle} block>Camera CHEMCAM</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by Chemistry and Camera Complex</h1>
                            <ChemCamList chemCamList={this.state.chemcam} />
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


export default ChemCam;