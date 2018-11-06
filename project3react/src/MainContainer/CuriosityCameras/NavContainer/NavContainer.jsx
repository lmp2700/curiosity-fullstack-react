import React, {Component} from 'react'
import NavCamList from './NavList'
import Modal from 'react-responsive-modal';
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button} from 'reactstrap'

class NavCamera extends Component {
    constructor(){
        super();
            this.state = {
                navCam: [],
                open: false
            }
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
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render(){
        return (
            <div>
                <Button outline color="info" size="lg" onClick={this.onOpenModal} block>Camera NAVCAM</Button>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <h1>Photos by Curiosity's Navigation Camera</h1>
                            <NavCamList navCamPhotos={this.state.navCam}/>
                            <CommentContainer comments={this.state.comments}/>
                    </Modal>
            </div>
        )
    }
}

export default NavCamera;