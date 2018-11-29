import React from 'react'

const MahliList = (props) => {
    const mahliPhotoList = props.mahliPhotoList.map((mahliPhotos, i) => {
        return <div id="info" key={i}>
                    <br/>
                <img width={450} height={400} src={mahliPhotos.img_src} alt={mahliPhotos.earth_date} />
        </div>
    })
    return(
        <div>
            {mahliPhotoList}
        </div>
    )
}



export default MahliList;