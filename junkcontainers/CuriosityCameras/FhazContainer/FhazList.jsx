import React from 'react'

const FhazPhotosList = (props) => {
    const fhazPhotos = props.fhazPhotosList.map((phazPhoto, i) => {
        return <div id="info" key={i}>
                    <br/>
                <img width={450} height={400} src={phazPhoto.img_src} alt={phazPhoto.earth_date}/>
            </div>
    })
    return (
        <div>
            {fhazPhotos}
        </div>
    )
}

export default FhazPhotosList;