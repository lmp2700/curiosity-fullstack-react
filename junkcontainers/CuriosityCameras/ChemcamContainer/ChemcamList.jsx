import React, {Component} from 'react'

class ChemCamList extends Component {
    constructor(){
        super();
    }   
    render(){
      const chemCamPhotos = this.props.chemCamList.map((ChemCamPhoto, id) => {
        // console.log(ChemCamPhoto)
        return  <div className="info" key={ChemCamPhoto.id}>
                        <br/>
                        <img width={450} height={400} src={ChemCamPhoto.img_src} alt={ChemCamPhoto.earth_date} />
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