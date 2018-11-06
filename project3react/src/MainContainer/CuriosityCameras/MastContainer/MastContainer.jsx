import React, {Component} from 'react'
import MastPhotoList from './MastList'
import Modal from 'react-responsive-modal';
import CommentContainer from '../CommentContainer/CommentContainer'
import {Button} from 'reactstrap'

class MastCamera extends Component {
    constructor() {
        super();
        this.state = {
            mast: [],
            open: false
        }
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
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render(){
    return (
            <div>
                <Button outline color="info" size="lg" onClick={this.onOpenModal} block>Camera MAST</Button>
                    <Modal open={this.state.open} onClose={this.onCloseModal} center>
                        <h1>Photos by Curiosity's Mast Camera</h1>
                            <MastPhotoList mastPhotosList={this.state.mast}/>
                            <CommentContainer comments={this.state.comments}/>
                    </Modal>
            </div>
        )
    }
}

export default MastCamera;