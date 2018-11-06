import React, {Component} from 'react'
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

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
    onEnterUsername = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    onMakeComment = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log('comment click')
        this.setState({
            name: '',
            comments: ''
        })
    }
render() {
    return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <div>
                        <FormGroup>
                            <Label>Name: </Label>
                                <Input type="text" placeholder="name" onChange={this.onEnterUsername}/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Comments: </Label>
                                <Input type="textarea" placeholder="comments" onChange={this.onMakeComment} />
                        </FormGroup>
                            <Button outline color="info" type="submit" value="Submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default Comment;