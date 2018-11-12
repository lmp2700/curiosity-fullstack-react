import React, {Component} from 'react'
import {Button} from 'reactstrap'
import EditComment from './CommentEdit'

// onClick={this.props.editComment.bind(null, comment)}

class Comments extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            comment: '',
            modal: false,
            nestedModal: false,
            closeAll: false
        }
            this.toggle = this.toggle.bind(this);
            this.toggleNested = this.toggleNested.bind(this);
            this.toggleAll = this.toggleAll.bind(this);
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
      toggleNested() {
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: false
        });
      }
      toggleAll() {
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: true
        });
      }
    render(){
        const listedComment = this.props.comments.map((comment, i) => {
            return (
                <div key={comment._id}>
                    <h2>{comment.username}</h2>
                    <h4>{comment.comment}</h4>
                    <br/>
                    <EditComment editedComment={this.state.comment}/>
                    <Button outline color="info" size="sm" onClick={this.props.deleteComment.bind(null, comment._id)}>Delete</Button>
                </div>
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