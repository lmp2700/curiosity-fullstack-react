import React from 'react'
import {Button} from 'reactstrap'

const Comments = (props) => {
    console.log(props.comments)
    const listedComment = props.comments.map((comment, i) => {
        return (
            <div key={comment._id}>
                <h2>{comment.username}</h2>
                <h4>{comment.comment}</h4>
                <br/>
                <Button size="sm" onClick={props.editComment.bind(null, comment)}>Edit</Button>&nbsp;
                <Button size="sm" onClick={props.deleteComment.bind(null, comment._id)}>Delete</Button>
            </div>
        )
    })
    return (
        <div>
            {listedComment}
        </div>
    )
}
export default Comments;