import React, {Component} from 'react'
import {Container, Button} from 'reactstrap';

class Comment extends Component {
    constructor(){
        // this.onEnterUsername = this.onEnterUsername.bind(this);
        // this.onMakeComment = this.onMakeComment.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        super();
            this.state = {
                name: '',
                comments: ''
            }
    }
    onEnterUsername(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    onMakeComment(e) {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
            name: '',
            comments: ''
        })
    }
render() {
    return (
            <Container>
                <div>
                <form onSubmit={this.onSubmit}>
                    <label>Name: </label>
                        <input type="text" value="name" onChange={this.onEnterUsername}/>
                    <label>Comments: </label>
                        <input type="text" value="comments" onChange={this.onMakeComment} />
                    <button type="submit" value="Submit">Submit</button>
                </form>
                </div>
            </Container>
        )
    }
}

export default Comment;