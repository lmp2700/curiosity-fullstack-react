import React from 'react'

const ChemCamList = (props) => {
    const chemCamPhotos = props.ChemCamPhotos.map((ChemCamPhoto, i) => {
        return <div id="info" key={i}>
        <h1>Chemcam Photos</h1><br/>
        {ChemCamPhoto.photos}
        </div>
    })
    return (
        <div>
            {chemCamPhotos}
        </div>
    ) 
}

export default ChemCamList;