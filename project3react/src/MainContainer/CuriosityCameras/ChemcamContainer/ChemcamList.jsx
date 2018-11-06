import React, {Component} from 'react'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

class ChemCamList extends Component {
    constructor(){
        super();
    }
    render(){
      const chemCamPhotos = this.props.chemCamList.map((ChemCamPhoto, i) => {
        // console.log(ChemCamPhoto)
        return  <div className="info" key={i}>
                    <h1>Chemcam Photos</h1><br/>
                        <img width={500} height={450} src={ChemCamPhoto.img_src} />
            </div>
    })
    return (
        <div>
            {chemCamPhotos}
        </div>
            )   
    }
}
    

export default ChemCamList;