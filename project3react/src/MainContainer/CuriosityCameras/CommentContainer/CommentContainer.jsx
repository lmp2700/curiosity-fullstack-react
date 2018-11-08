import React, {Component} from 'react'
import NewComment from './CommentNew'
import CommentList from './CommentList'
import 'whatwg-fetch';
import {Container} from 'reactstrap';

class Comment extends Component {
    constructor(){
        super();
            this.state = {
                comments: [],
                _id: '',
                username: '',
                comment: ''
            }
    }
    getComments = async () => {
            const comments = await fetch('http://localhost:9000/comments')
            const commentsJson = await comments.json()
            return commentsJson
    }
    componentDidMount() {
        this.getComments().then((comments) => {
            this.setState({commentData: comments})
        }).catch((err) => {
            console.log(err)
        })
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
            const createComment = {
                username: this.state.username,
                comment: this.state.comment,
            }
            const newComment = await fetch('http://localhost:9000/comments', {
                method: 'POST',
                body: JSON.stringify(createComment),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const parsedResponse = await createComment.json();
            console.log(parsedResponse, ' this is response')  
            this.setState({
                name: '',
                comments: ''
            })
        } catch(err) {
            return(err)
        }
    }
render() {
    console.log(this.state)
    return (
            <Container>
                <NewComment addComment={this.addComment}/>
                <CommentList comments={this.state.comments} />
            </Container>
        )
    }
}

export default Comment;