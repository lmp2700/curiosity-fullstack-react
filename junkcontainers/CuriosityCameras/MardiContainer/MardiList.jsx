import React from 'react'

const MardiPhotoList = (props) => {
    const mardiPhotos = props.mardiPhotosList.map((mardiPhoto, i) => {
        return <div id="info" key={i}>
                    <br/>
                <img width={450} height={400} src={mardiPhoto.img_src} alt={mardiPhoto.earth_date}/>
        </div>
    })
    return (
        <div>
            {mardiPhotos}
        </div>
    )
}

export default MardiPhotoList;