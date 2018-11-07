import React from 'react'

const RhazCamList = (props) => {
    const rhazCamPhotos = props.rhazCamList.map((rhazCam, i) => {
        return <div id="info" key={i}>
                    <br/>
                <img width={450} height={400} src={rhazCam.img_src} alt={rhazCam.earth_date} />
            </div>
    })
    return (
        <div>
            {rhazCamPhotos}
        </div>
    )
}

export default RhazCamList;