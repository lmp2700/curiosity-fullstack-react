import React, {Component} from 'react';
import CommentContainer from '../CommentContainer/CommentContainer'
import CuriosityPhotoList from './CuriosityList/CuriosityPhotoList'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class CuriositySearch extends Component {
    constructor(){
        super();
        this.state = {
            camera: [],
            open: false,
            modal: false
        }
        this.onSelect = this.onSelect.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    getPhotos = async () => {
        try {
            const curiosity = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.props.sol + '&camera=' + this.props.camera + '&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl');
            const curiosityJson = await curiosity.json();
            console.log(curiosityJson.photos)
            return curiosityJson.photos
        } catch(err) {
            return(err)
        }
    } 
    componentDidMount(e) {
        e.preventDefault();
        this.getPhotos().then((curiosity) => {
            console.log(curiosity, ' this is curious')
          this.setState({curiosity: curiosity});
        }).catch((err) => {
          console.log(err);
        });
    }
    onOpenModal = () => {
        this.setState({ open: true });
      }
    onCloseModal = () => {
        this.setState({ open: false });
      }
    render(){
        return(
            <div>
                <Button outline color="info" size="lg" className="appbutton" onClick={this.toggle} block>{this.props.camera}</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by {this.props.camera}</h1>
                            <CuriosityPhotoList curiositySearch={this.state.camera} />
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

export default CuriositySearch;