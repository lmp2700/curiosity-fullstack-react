import React from 'react'

const MardiPhotoList = (props) => {
    const mardiPhotos = props.mardiPhotosList.map((mardiPhoto, i) => {
        return <div id="info" key={i}>
            <h1>Mardi Photos Photos</h1><br/>
                <img width={500} height={450} src={mardiPhoto.img_src} />
        </div>
    })
    return (
        <div>
            {mardiPhotos}
        </div>
    )
}

export default MardiPhotoList;