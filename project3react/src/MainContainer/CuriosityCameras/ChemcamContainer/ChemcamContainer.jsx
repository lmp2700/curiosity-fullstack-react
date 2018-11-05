import React, {Component} from 'react'
import ChemCamList from "./ChemcamList"

class ChemCam extends Component {
    constructor() {
        super();
        this.state = {
            chemcam: []
        }
    }
getChemPhotos = async () => {
    try {
        const chemCamPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=chemcam&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
        const chemCamPhotosJson = await chemCamPhotos.json();
        console.log(chemCamPhotosJson)
        return chemCamPhotosJson.photos
    } catch(err) {
        return(err)
    }
}
componentDidMount() {
    this.getChemPhotos().then((chemcam) => {
        console.log(chemcam, ' chemcamphotos')
        this.setState({chemcam: chemcam});
    }).catch((err) => {
        console.log(err)
    });
}
    render() {
        return(
            <div>
                <h1>Photos by Curiosity's Chemistry and Camera Complex</h1>
                <ChemCamList chemCamList={this.state.chemcam} />
            </div>
        )
    }
}

export default ChemCam;