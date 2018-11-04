import React, {Component} from 'react'
import MardiPhotoList from './MardiList'

class MardiCamera extends Component {
    constructor() {
        super();
        this.state = {
            mardi: []
        }
    }
    getMardiPhotos = async () => {
        try {
            const mardiPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=mardi&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            mardiPhotosJson = await mardiPhotos.json();
            console.log(mardiPhotosJson)
            return mardiPhotosJson.photos
        } catch(err) {
            return(err)
        } 
    }
    componentDidMount () {
        this.getMardiPhotos().then((mardiPhoto) => {
            this.setState({mardi: mardiPhoto})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
    return(
            <div>
                <h1>Photos by Curiosity's Mars Descent Imager</h1>
                <MardiPhotoList />
            </div>
        )
    }
}

export default MardiCamera;