import React from 'react'

// refactor as the main page that shows up when you log in

const CuriosityPhotoList = (props) => {
    const curiosityPhotos = props.curiosityPhotos.map((curiosityPhoto, i) => {
        return <div id="info" key={i}>
            <h2>Sol: {curiosityPhoto.sol}</h2>
            <li>
                <h4>Cameras Used: {curiosityPhoto.cameras}</h4>
                <h4>Total Photos: {curiosityPhoto.total_photos}</h4>
            </li>
        </div>
    })
    return (
        <div>
            {curiosityPhotos}
        </div>
    )
}

export default CuriosityPhotoList;