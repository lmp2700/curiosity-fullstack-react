import React from 'react'

const Comments = (props) => {
    const comment = props.comments.map((comments, i) => {
        return (
            <li key={comments._id}>
                <h3>{comments.username}</h3>
                <small>{comments.comment}</small>
                <button>Edit</button>
                <button>Delete</button>
            </li>
        )
    })
    return (
        <div>
            {comment}
        </div>
    )
}

export default Comments;