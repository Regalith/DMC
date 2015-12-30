var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;
var Input = require('react-bootstrap').Input;
var ButtonInput = require('react-bootstrap').ButtonInput;
var AuthService = require('../../services/AuthService.js');


var LoginComponent = React.createClass({

    getInitialState() {
        return {
            showModal: false,
            username : null,
            password : null,
        };
    },

    close() {
        this.setState({showModal: false});
    },

    open() {
        this.setState({showModal: true});
    },

    login : function(e) {
      e.preventDefault();



    },

    render : function() {
        return(
            <div>
                <Button bsSize="large" bsStyle="info" onClick={this.open}>
                    Login
                </Button>

                <Modal show={this.state.showModal} onHide={this.close} bsSize="small" S>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <Input bsSize='small' type="text" label="Username" placeholder="username" />
                            <Input bsSize='small' type="text" label="Password" placeholder="password" />
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                        <Button onClick={this.close}>Login</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
});

module.exports = LoginComponent;

