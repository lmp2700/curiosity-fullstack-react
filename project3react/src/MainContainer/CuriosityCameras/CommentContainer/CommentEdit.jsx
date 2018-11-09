import React from 'react'
import {Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

const EditComment = (props) => {
    return (
        <Container>
            <h3>Edit Comment</h3>
            <Form onSubmit={this.props.addComment.bind(null, this.state)}>
                <Label>
                    Edit Comment <input type="text" name="comments" value={props.comments} onChange={props.onChangeForm} />    
                </Label><br/>
                <Button type="submit">Edit</Button>
                <Button type="submit">Delete</Button>
            </Form>
        </Container>
    )

}

export default EditComment;