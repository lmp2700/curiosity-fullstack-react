import React, {Component} from 'react'
import RhazCamList from './RhazList'

class RhazCamera extends Component {
    constructor() {
        super();
            this.state = {
                rhazCam: []
            }
    }
    getRhazPhotos = async () => {
        try {
            const rhazCamPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=rhaz&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            rhazCamPhotosJson = await rhazCamPhotos.json();
            console.log(rhazCamPhotosJson)
            return rhazCamPhotosJson.photos
        } catch(err) {
            return(err)
        }
    }
    componentDidMount() {
        this.getRhazPhotos().then((rhazCam) => {
            console.log(rhazCam, ' rhazcamphotos')
            this.setState({rhazCam: rhazCam})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h1>Photos by Curiosity's Rear Hazard Avoidance Camera</h1>
                <RhazCamList />
            </div>
        )
    }
}

export default RhazCamera;