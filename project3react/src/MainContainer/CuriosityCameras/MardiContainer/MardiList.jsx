import React from 'react'

const MardiPhotoList = (props) => {
    const mardiPhotos = props.mardiPhotos.map((mardiPhoto, i) => {
        return <div id="info" key={i}>
        <h1>Mardi Photos Photos</h1><br/>
        {mardiPhoto.photos}
        </div>
    })
    return (
        <div>
            {mardiPhotos}
        </div>
    )
}

export default MardiPhotoList;