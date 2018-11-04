import React, {Component} from 'react'

class MahliCamera extends Component {
    constructor(){
        super();
        this.state = {
            mahli: []
        }
    }
    getMahliPhotos = async () => {
        try {
        const mahliPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=mahli&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
        mahliPhotosJson = mahliPhotos.json();
        console.log(mahliPhotosJson, ' MAHLI Photos')
        return mahliPhotosJson.photos
    } catch(err) {
        return (err)
    }
}
componentDidMount() {
    this.getMahliPhotos().then((mahlicam) => {
        this.setState({mahli: mahlicam})
    }).catch((err) => {
        console.log(err)
    })
}
    render() {
    return (
        <div>
            <h1>Photos by Curiosity's Mars Hand Lens Imager</h1>
                <MahliList />
        </div>
            )
    }
}

export default MahliCamera;