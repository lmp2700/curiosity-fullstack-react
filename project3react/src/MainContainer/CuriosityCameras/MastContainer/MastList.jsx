import React from 'react'

console.log('mast 1')
const MastPhotoList = (props) => {
    const mastPhotos = props.mastPhotos.map((mastPhoto, i) => {
        console.log('mast 2')
        return <div id="info" key={i}>
        <h1>Mast Photos</h1><br/>
        {mastPhoto.img_src}
        </div>
    })
    return (
        <div>
            {mastPhotos} 
        </div>
    )
}
console.log('mast last')
export default MastPhotoList;