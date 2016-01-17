import React from 'react';
import UserStore from '../../stores/UserStore';

//Bootstrap components
var Nav = require("react-bootstrap").Nav;
var NavItem = require('react-bootstrap').NavItem;

var userBarStyle = {
    position: 'fixed',
    top: 81,
    maxWidth: 200,
    minWidth: 200,
    zIndex : 0
};


class UserBarComponent extends React.Component{

    constructor(props)
    {
        super(props);
    }

    componentDidMount(){
        UserStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange(){

    }


    render(){
        return(
            <div>
               <Nav bsStyle="pills" stacked activeKey={1} style={userBarStyle}>
                    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
              </Nav>
            </div>
        )
    }
}
export default UserBarComponent;