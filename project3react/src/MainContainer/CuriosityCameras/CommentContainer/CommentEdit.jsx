import React, {Component} from 'react'
import {Container, Button, Form, Label, Input, Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';

class EditComment extends Component {
    constructor(props) {
        super(props);
            this.state = {
                username: this.props.username,
                comment: this.props.comment
            }
        }
render(){
    console.log('before edit')
    return (
        <Container>
            <Button outline color="info" size="sm" onClick={this.toggleNested}>Edit Comment</Button>
              <Modal isOpen={this.state.nestedModal} onClosed={this.state.closeAll ? this.toggle : undefined}>
                <ModalHeader>Edit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.props.editComment.bind(null, this.state)}>
                            <Label>Name: <Input type="text" name="username" placeholder="name" value={this.props.username}/></Label>
                            <Label>Edit Comment: <input type="text" name="comment" value={this.props.comments} onChange={this.props.onChangeForm} />    
                            </Label><br/>
                        </Form>
                    </ModalBody>
                        <ModalFooter>
                            <Button type="submit" onClick={this.toggleAll}>Submit Edit</Button>
                        </ModalFooter>
              </Modal>
        </Container>
        )  
    } 
}
console.log('submit')

export default EditComment;