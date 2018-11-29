import React, {Component} from 'react'
import NavCamList from './NavList'
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button, Modal, ModalBody, ModalFooter} from 'reactstrap'

class NavCamera extends Component {
    constructor(){
        super();
            this.state = {
                navCam: [],
                modal: false
            }
            this.toggle = this.toggle.bind(this);
    }
    getNavCam = async () => {
        try{
            const navCam = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=navcam&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const navCamJson = await navCam.json();
            // console.log(navCamJson)
            return navCamJson.photos
        } catch(err) {
            return(err)
        }
    }
    componentDidMount() {
        this.getNavCam().then((navCam) => {
            // console.log(navCam, ' navCamphotos')
            this.setState({navCam: navCam})
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
                <Button outline color="info" className="appbutton" size="lg" onClick={this.toggle} block>Camera NAVCAM</Button>
                    <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                        <ModalBody>
                            <h1>Photos by Navigation Camera</h1>
                                <NavCamList navCamPhotos={this.state.navCam}/>
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

export default NavCamera;