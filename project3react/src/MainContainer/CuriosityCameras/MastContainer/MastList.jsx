import React from 'react'

const MastPhotoList = (props) => {
    const mastPhotos = props.mastPhotosList.map((mastPhoto, i) => {
        return <div id="info" key={i}>
                    <br/>
                <img width={450} height={400} src={mastPhoto.img_src} alt={mastPhoto.earth_date}/>
        </div>
    })
    return (
        <div>
            {mastPhotos} 
        </div>
    )
}

export default MastPhotoList;