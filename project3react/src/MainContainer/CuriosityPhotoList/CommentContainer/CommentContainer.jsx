import React, {Component} from 'react'
import NewComment from './CommentNew'
import CommentList from './CommentList'
import EditComment from './CommentEdit'
import 'whatwg-fetch';
import {Container} from 'reactstrap';

class Comment extends Component {
    constructor(){
        super();
            this.state = {
                comments: [],
                username: '',
                comment: ''
            }
    }
    getComments = async (e) => {
            const comments = await fetch('http://localhost:9000/comments')
            const commentsJson = await comments.json()
            console.log(commentsJson)
            return commentsJson.comments
    }
    componentDidMount() {
        this.getComments().then((comments) => {
            this.setState({comment: comments});
        }).catch((err) => {
            console.log(err)
        })
    }
    componentWillUnmount() {
        this.isCancelled = true;
    }
    onChangeForm = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    addComment = async (newComment, e) => {
        e.preventDefault();
        console.log(newComment)
        console.log('comment click')
        try {
            const createdComment = await fetch('http://localhost:9000/comments', {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const parsedResponse = await createdComment.json();
            console.log(parsedResponse, ' this is response')  
            this.setState({comments: [...this.state.comments, parsedResponse.comment]})
        } catch(err) {
            console.log(err)
            return(err)
        }
    }
    editComment = async (comment) => {
        const editComment = await fetch('http://localhost:9000/comments/' + comment._id, {      
           method: 'PUT',
           body: JSON.stringify({
            username: this.state.username,
            comment: this.state.comments
        }),
            headers: {
                'Content-Type': 'application/json'
            }
       });
       const editCommentParsed = await editComment.json();
       const newCommentArray = this.state.comments.map((comment, index) => {
        console.log(comment._id + " | " + index)
        console.log(editCommentParsed.comments)
           if(comment._id === editCommentParsed.comments._id) {
            comment = editCommentParsed.comment
            }
           return comment
       })
       this.setState({
           comment: newCommentArray
       })
    }
    deleteComment = async (id) => {
        const deleteComment = await fetch('http://localhost:9000/comments/' + id, {
            method: 'DELETE'
        })
        const deleteCommentParsed = await deleteComment.json();
        console.log(deleteCommentParsed, ' deleted comment')
        this.setState({comments: this.state.comments.filter((comments => comments._id !== id))})
    }
render() {
    console.log(this.state)
    return (
            <Container>
                <h3>Comments:</h3> 
                <NewComment addComment={this.addComment}/><br/>
                <hr className="my-2"/>
                <CommentList deleteComment={this.deleteComment} editComment={this.editComment} comments={this.state.comments}/><br/>
            </Container>
        )
    }
}

export default Comment;