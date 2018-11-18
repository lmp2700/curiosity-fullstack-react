import React, {Component} from 'react';
import CommentContainer from '../CommentContainer/CommentContainer'
import CuriosityPhotoList from './CuriosityList/CuriosityPhotoList'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class CuriositySearch extends Component {
    constructor(){
        super();
        this.state = {
            camera: [],
            fhaz: [],
            sol: [],
            open: false,
        }
        this.onSelect = this.onSelect.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    getPhotos = async () => {
        try {
            const curiosity = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=' + this.props.sol + '&camera=' + this.props.camera + '&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl');
            const curiosityJson = await curiosity.json();
            console.log(curiosityJson.photos, ' json photos')
            return curiosityJson.photos
        } catch(err) {
            return(err)
        }
    } 
    componentDidMount() {
        this.getPhotos().then((curiosity) => {
            console.log(curiosity, ' this is curious')
          this.setState({camera: curiosity});
        }).catch((err) => {
          console.log(err);
        });
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    onOpenModal = () => {
        this.setState({ open: true });
      }
    onCloseModal = () => {
        this.setState({ open: false });
      }
      onSelect = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    render(){
        return(
            <div>
                <Button outline color="info" size="lg" className="appbutton" onClick={this.toggle} block>{this.state.camera.name}</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by {this.state.camera.full_name}</h1>
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