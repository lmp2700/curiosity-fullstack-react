import React, {Component} from 'react'
import NavCamList from './NavList'

class NavCamera extends Component {
    constructor(){
        super();
            this.state = {
                navCam: []
            }
    }
    getNavCam = async () => {
        try{
            const navCam = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=355&camera=navcam&api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl')
            navCamJson = navCam.json;
            console.log(navCamJson)
            return navCamJson
        } catch(err) {
            return(err)
        }
    }
    componentDidMount() {
        this.getNavCam().then((navCam) => {
            this.setState({navCam: navCam})
        }).catch((err) => {
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <h1>Photos by Curiosity's Navigation Camera</h1>
                <NavCamList />
            </div>
        )
    }
}

export default NavCamera;