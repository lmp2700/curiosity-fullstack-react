import React from 'react'

const NavCamList = (props) => {
    const NavCamPhotos = props.NavCamPhotos.map((navCam, i) => {
        return <div id="info" key={i}>
        <h1>Nav Cam Photos</h1><br/>
        {navCam.photos}
        </div>
    })
    return (
        <div>
            {NavCamPhotos}
        </div>
    )
}

export default NavCamList;