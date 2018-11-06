import React from 'react'

const FhazPhotosList = (props) => {
    const fhazPhotos = props.fhazPhotosList.map((phazPhoto, i) => {
        return <div id="info" key={i}>
            <h1>FHAZ Photos</h1><br/>
                <img width={500} height={450} src={phazPhoto.img_src} alt={phazPhoto.earth_date}/>
            </div>
    })
    return (
        <div>
            {fhazPhotos}
        </div>
    )
}

export default FhazPhotosList;