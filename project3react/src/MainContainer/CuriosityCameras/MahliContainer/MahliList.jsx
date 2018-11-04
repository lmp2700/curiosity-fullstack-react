import React from 'react'

const MahliList = (props) => {
    const mahliPhotoList = props.mahliPhotoList.map((mahliPhotos, i) => {
        return <div id="info" key={i}>
        <h1>Mahli Photos</h1><br/>
        {mahliPhotos.photos}
        </div>
    })
    return(
        {mahliPhotoList}
    )
}

export default MahliList;