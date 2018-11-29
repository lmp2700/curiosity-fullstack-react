import React, {Component} from 'react'
import EditComment from './CommentEdit'

// onClick={this.props.editComment.bind(null, comment)}

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            comment: ''
    }
}
    render(){
        const listedComment = this.props.comments.map((comment, i) => {
            return (
                <EditComment editComment={this.props.editComment} deleteComment={this.props.deleteComment} comment={comment}/>
            )
        })
        return (
            <div>
                {listedComment}
            </div>
        )
    } 
}

   
export default Comments;