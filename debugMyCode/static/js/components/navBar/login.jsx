import React from 'react';
import AuthService from '../../services/AuthService.js';

//React bootstrap classes
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;


class LoginComponent extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            username : '',
            password : '',
        }
    }

    close() {
        this.setState({showModal: false});
    }

    open() {
        this.setState({showModal: true});
    }

    handleUsernameChange(e)
    {
        e.preventDefault();
        this.setState(
            {
                username : e.target.value,
            });
    }
    handlePasswordChange(e)
    {
        e.preventDefault();
         this.setState(
            {
                password : e.target.value,
            });
    }

    login(e) {
        e.preventDefault();
        var success = AuthService.login(this.state.username, this.state.password);
        this.setState({showModal: false});
    }

    render(){
        return(
            <div>
                <Button bsSize="large" bsStyle="info" onClick={this.open.bind(this)}>
                     <h2>Login</h2>
                </Button>

                <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="small" S>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} bsSize='small' type="text" label="Username" placeholder="username" />
                            <Input value={this.state.password} onChange={this.handlePasswordChange.bind(this)} bsSize='small' type="text" label="Password" placeholder="password" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                        <Button onClick={this.login.bind(this)}>Login</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default LoginComponent;

