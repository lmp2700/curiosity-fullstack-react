import React from 'react'

const NavCamList = (props) => {
    const NavCamPhotos = props.navCamPhotos.map((navCam, i) => {
        return <div id="info" key={i}>
            <h1>Nav Cam Photos</h1><br/>
                <img width={500} height={450} src={navCam.img_src}/>
        </div>
    })
    return (
        <div>
            {NavCamPhotos}
        </div>
    )
}

export default NavCamList;