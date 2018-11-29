import React from 'react'

const NavCamList = (props) => {
    const NavCamPhotos = props.navCamPhotos.map((navCam, i) => {
        return <div id="info" key={i}>
                    <br/>
                <img width={450} height={400} src={navCam.img_src} alt={navCam.earth_date}/>
        </div>
    })
    return (
        <div>
            {NavCamPhotos}
        </div>
    )
}

export default NavCamList;