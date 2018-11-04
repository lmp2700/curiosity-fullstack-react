import React from 'react'

const MastPhotoList = (props) => {
    const mastPhotoList = props.mastPhotoList.map((MastPhotos, i) => {
        return <div id="info" key={i}>
        <h1>Mast Photos</h1><br/>
        {MastPhotos.photos}
        </div>
    })
    return (
        <div>
            {mastPhotoList}
        </div>
    )
}

export default MastPhotoList;