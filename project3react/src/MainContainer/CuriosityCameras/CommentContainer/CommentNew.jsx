import React, {Component} from 'react'
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class newComment extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            comment: ''
        }
    }
    onChangeForm = (e) => {
        e.preventDefault();
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(this.state)
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.props.addComment.bind(null, this.state)}>
                    <div>
                        <FormGroup>
                            <Label>Name: <Input type="text" name="username" placeholder="name" onChange={this.onChangeForm}/></Label>  
                        </FormGroup>
                        <FormGroup>
                            <Label>Comments: <Input type="textarea" name="comment" placeholder="comments" onChange={this.onChangeForm} /></Label>
                        </FormGroup>
                            <Button outline color="info" type="submit" value="Submit">Submit</Button>
                    </div>
                </Form>
            </Container>
        )
    }
}

export default newComment;