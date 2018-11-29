import React, {Component} from 'react'
import {Container, Button, Form, Label, Input, ModalBody, Modal, ModalFooter, ModalHeader} from 'reactstrap';

class EditComment extends Component {
    constructor(props) {
        super(props);
            this.state = {
                username: '',
                comment: '',
                modal: false,
                nestedModal: false,
                closeAll: false,
                    editedComment: {
                        username: this.props.username,
                        comment: this.props.comment,  
                }
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
          editedComment = (e) => {
            this.setState({
                editedComment: {
                    ...this.state.editedComment,
                    [e.currentTarget.name] : e.currentTarget.value
                }
            })
        }
        submitEdit = (e) => {
            e.preventDefault();
            this.props.editComment(this.state.updatedComment);
        }
render(){
    console.log('before edit')
    return (
        <Container>
        <div key={this.props._id}>
            <h2>{this.props.username}</h2>
            <h4>{this.props.comment.comment}</h4>
            <br/>
                <Button outline color="info" size="sm" onClick={this.props.deleteComment.bind(null, this.props.comment._id)}>Delete</Button>
                &nbsp; <Button outline color="info" size="sm" onClick={this.toggleNested}>Edit Comment</Button>
        </div>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                <ModalHeader>Edit Comment</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.submitEdit}>
                            <Label>Name: <Input type="text" name="username" placeholder={this.props.comment.username}/></Label>
                            <Label>Edit Comment: <input type="text" name="comment" placeholder={this.props.comment.comment} onChange={this.editedComment}/></Label><br/>
                            <Button outline color="info" onClick={this.toggleNested}>Submit Edit</Button>
                        </Form>
                    </ModalBody>
                        <ModalFooter>
                            <Button color="info" onClick={this.toggleAll} block>Close</Button>
                        </ModalFooter>
            </Modal>
        </Container>
        )  
    } 
}
console.log('submit')

export default EditComment;


