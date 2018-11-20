import React, {Component} from 'react'
import MastPhotoList from './MastList'
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class MastCamera extends Component {
    constructor() {
        super();
        this.state = {
            mast: [],
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    getMastPhotos = async () => {
        try {
            const mastPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=mast&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const mastPhotosJson = await mastPhotos.json();
            // console.log(mastPhotosJson)
            return mastPhotosJson.photos
        } catch(err) {
            return(err)
        } 
    }
    componentDidMount() {
        this.getMastPhotos().then((mast) => {
            // console.log(mast, ' mastphotos')
            this.setState({mast: mast});
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
    render(){
    return (
            <div>
                <Button outline color="info" className="appbutton" size="lg" onClick={this.toggle} block>Camera MAST</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by Mast Camera</h1>
                                <MastPhotoList mastPhotosList={this.state.mast}/>
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

export default MastCamera;