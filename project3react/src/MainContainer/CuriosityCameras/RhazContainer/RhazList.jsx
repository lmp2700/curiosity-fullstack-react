import React from 'react'

const RhazCamList = (props) => {
    const rhazCamPhotos = props.rhazCamPhotos.map((rhazCam, i) => {
        return <div id="info" key={i}>
        <h1>RhazCam Photos</h1><br/>
            {rhazCam.photos}
        </div>
    })
    return (
        <div>
            {rhazCamPhotos}
        </div>
    )
}

export default RhazCamList;