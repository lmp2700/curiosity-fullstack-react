import React from 'react'
import {Button} from 'reactstrap'

const Comments = (props) => {
    console.log(props.comments)
    const listedComment = props.comments.map((comment, i) => {
        return (
            <div key={comment._id}>
                <h3>{comment.username}</h3>
                <small>{comment.comment}</small>
                <br/>
                <Button onClick={props.editComment.bind(null, comment)}>Edit</Button>
                <Button onClick={props.deleteComment.bind(null, comment._id)}>Delete</Button>
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