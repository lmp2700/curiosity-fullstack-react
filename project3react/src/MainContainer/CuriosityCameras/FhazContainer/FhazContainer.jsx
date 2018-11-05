import React, {Component} from 'react'
import FhazPhotosList from './FhazList'

class FhazCamera extends Component {
    constructor() {
        super();
        this.state = {
            fhaz: []
        }
    }
    getFhazPhotos = async () => {
        try {
            const fhazPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=fhaz&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const fhazPhotosJson = await fhazPhotos.json();
            console.log(fhazPhotosJson)
            return fhazPhotosJson.photos
        } catch (err) {
            return(err)
        }
    }
    componentDidMount() {
        this.getFhazPhotos().then((fhazPhotos) => {
            console.log(fhazPhotos, ' fhazphotos')
            this.setState({fhaz: fhazPhotos})
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        return(
            <div>
                <h1>Photos by Curiosity's Front Hazard Avoidance Camera</h1>
                <FhazPhotosList fhazPhotosList={this.state.fhaz}/>
            </div>
        )
    }
}

export default FhazCamera;