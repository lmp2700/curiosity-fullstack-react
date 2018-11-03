import React from 'react'

const fhazPhotosList = (props) => {
    const fhazPhotos = props.fhazPhotos.map((phazPhoto, i) => {
        return <div id="info" key={i}>
        <h1>FHAZ Photos</h1>
        {phazPhoto.photo}
        </div>
    })
    return (
        <div>
            {fhazPhotos}
        </div>
    )
}

export default fhazPhotosList;