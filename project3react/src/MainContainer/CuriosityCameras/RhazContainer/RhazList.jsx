import React from 'react'

const RhazCamList = (props) => {
    const rhazCamPhotos = props.rhazCamList.map((rhazCam, i) => {
        return <div id="info" key={i}>
            <h1>RhazCam Photos</h1><br/>
                <img src={rhazCam.img_src} />
            </div>
    })
    return (
        <div>
            {rhazCamPhotos}
        </div>
    )
}

export default RhazCamList;