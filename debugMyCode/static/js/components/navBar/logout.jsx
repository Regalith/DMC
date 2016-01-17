import React from 'react';
import UserAction from "../../actions/UserAction";

//Bootstrap components
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;


class LogoutComponent extends React.Component{

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            showModal: false,
        }
    }
    close() {
        this.setState({showModal: false});
        this.logout();
    }

    open() {
        this.setState({showModal: true});
    }
    logout() {
        UserAction.logoutUser();
    }

    render(){
        return(
            <div>
                <Button bsSize="large" bsStyle="info" onClick={this.open.bind(this)}>
                    <h2>Logout</h2>
                </Button>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)} bsSize="small" S>
                    <Modal.Header closeButton>
                        <Modal.Title>You are now Logged Out</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default LogoutComponent;
