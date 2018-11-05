import React from 'react'

const ChemCamList = (props) => {
    const chemCamPhotos = props.chemCamList.map((ChemCamPhoto, i) => {
        return <div id="info" key={i}>
                    <h1>Chemcam Photos</h1><br/>
                        <img src={ChemCamPhoto.img_src} />
                </div>
    })
    return (
        <div>
            {chemCamPhotos}
        </div>
    ) 
}

export default ChemCamList;