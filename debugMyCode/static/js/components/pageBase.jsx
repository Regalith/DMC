import  React from 'react';
import LoginComponent from './navBar/login.jsx';
import LogoutComponent from './navBar/logout.jsx';
import UserStore from '../stores/UserStore';
import NavBarComponent from './navBar/navBar.jsx';
import UserBarComponent from './navBar/userBar.jsx';

//Bootstrap Components
var Grid = require('react-bootstrap').Grid
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var baseStyle = {
    minWidth : 1366,
    marginLeft : 0,
    paddingLeft : 220,
    paddingTop : 110

};



class NavBase extends React.Component{

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
                <NavBarComponent />
                <UserBarComponent />
                <Grid fluid style={baseStyle}>
                    {this.props.children}
                </Grid>
            </div>
        )
    }
}
export default NavBase;