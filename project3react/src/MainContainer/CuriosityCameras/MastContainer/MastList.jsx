import React from 'react'

const MastPhotoList = (props) => {
    const mastPhotos = props.mastPhotosList.map((mastPhoto, i) => {
        return <div id="info" key={i}>
            <h1>Mast Photos</h1><br/>
                <img width={500} height={450} src={mastPhoto.img_src} />
        </div>
    })
    return (
        <div>
            {mastPhotos} 
        </div>
    )
}

export default MastPhotoList;