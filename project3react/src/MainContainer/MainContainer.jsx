import React, {Component} from 'react'
import CuriosityPhotoList from './CuriosityPhotoList/CuriosityPhotoList';


class Curiosity extends Component {
    constructor() {
        super();
        this.state = {
            curiosity: []
        }
    }
    getPhotos = async () => {
        try {
            const curiosity = await fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl');
            const curiosityJson = await curiosity.json();
            return curiosityJson.photo_manifest.photos
        } catch(err) {
            return(err)
        }
    } 
    componentDidMount() {
        this.getPhotos().then((curiosity) => {
            console.log(curiosity, ' this is curious');
            this.setState({curiosity: curiosity});
          }).catch((err) => {
            console.log(err);
          });
    }
    render () {
        return (
            <div>
                <h1>Welcome! Everything is fine.</h1>
                    <CuriosityPhotoList curiosityPhotos={this.state.curiosity} />
            </div>
        )
    }
}

export default Curiosity;