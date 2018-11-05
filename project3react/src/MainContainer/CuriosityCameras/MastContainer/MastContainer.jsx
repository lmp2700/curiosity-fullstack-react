import React, {Component} from 'react'
import MastPhotoList from './MastList'

class MastCamera extends Component {
    constructor() {
        super();
        this.state = {
            mast: []
        }
    }
    getMastPhotos = async () => {
        try {
            const mastPhotos = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=mast&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            const mastPhotosJson = await mastPhotos.json
            console.log(mastPhotosJson)
            return mastPhotosJson.photos
        } catch(err) {
            return(err)
        } 
    }
    componentDidMount() {
        this.getMastPhotos().then((mastPhotos) => {
            console.log(mastPhotos, ' mastphotos')
            this.setState({mast: mastPhotos})
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
    return (
            <div>
                <h1>Photos by Curiosity's Mast Camera</h1>
                <MastPhotoList />
            </div>
        )
    }
}

export default MastCamera;