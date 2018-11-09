import React, {Component} from 'react'
import {Modal, ModalBody, Button, Input} from 'reactstrap';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
            modal: true
        }
        this.toggle = this.toggle.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    handleLogin = async (e) => {
        e.preventDefault();
        const loggedIn = await fetch('http://localhost:9000/auth', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const loggedInParsed = await loggedIn.json();
        if(loggedInParsed.data === 'login successful') {
            console.log(loggedInParsed)
            // this.props.history.push('comments')
        }
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    onOpenModal = () => {
        this.setState({ open: true });
      }; 
    onCloseModal = () => {
        this.setState({ open: false });
      };
    render(){
        return(
            <div>
                    <Button outline color="info" className="appbutton" onClick={this.toggle}>Login</Button>
                        <Modal isOpen={this.state.modal} onClose={this.toggle} center="true">
                                <ModalBody>
                                    <form onSubmit={this.handleLogin}>
                                        <label>Username: <Input type="text" name="username" placeholder="username" onChange={this.handleChange}/></label>
                                        <label>Password: <Input type="password" name="password" placeholder="password" onChange={this.handleChange}/></label>
                                            <Button outline color="info" type="submit" onClick={this.toggle}>Login</Button>
                                    </form>
                                </ModalBody>
                                    <Button color="info" onClick={this.toggle}>Close</Button>
                        </Modal>  
            </div>
        )
    }
}

export default Login;