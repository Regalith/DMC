import                                                        React from 'react';
import LoginComponent from './login.jsx';
import LogoutComponent from './logout.jsx';
import UserStore from '../../stores/UserStore';

//Bootstrap Components
var Navbar = require("react-bootstrap").Navbar;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var Link = require('react-router').Link;
var Image = require('react-bootstrap').Image;


class NavBarComponent extends React.Component{

    constructor(props)
    {
        super(props);
        this.toggleLogButton = this.toggleLogButton.bind(this);
        this.state = {
            logButton : <LoginComponent />
        }
    }

    componentDidMount(){
        UserStore.addChangeListener(this._onChange.bind(this));
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange.bind(this));
    }

    _onChange(){
        var logStatus = UserStore.isLoggedIn();
        this.toggleLogButton(logStatus);

    }

    toggleLogButton(isLoggedIn){

        if(isLoggedIn)
        {
            console.log("Redraw");
            this.setState({logButton : <LogoutComponent />});
        }
        else
        {
            console.log("Redraw false ");
            this.setState({logButton : <LoginComponent />});
        }
    }

    render(){
        return(
            <div>
               <Navbar fluid={true} fixedTop>
                    <Navbar.Header>
                            <Link to="/"><Image src="../static/build/img/Logo.png" responsive /></Link>
                    </Navbar.Header>
                    <Navbar.Collapse>
                          <Nav>
                                <Navbar.Text> Debug My Code </Navbar.Text>

                                <NavDropdown eventKey={1} title="Navigation" id="basic-nav-dropdown">
                                    <MenuItem eventKey={1.1} href="boop">Action </MenuItem>
                                    <MenuItem eventKey={1.2}>Another action</MenuItem>
                                    <MenuItem eventKey={1.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={1.3}>Separated link</MenuItem>
                                </NavDropdown>
                          </Nav>
                          <Nav pullRight>
                              {this.state.logButton}
                          </Nav>
                        </Navbar.Collapse>
                  </Navbar>

                 {this.props.children}
            </div>
        )
    }
}
export default NavBarComponent;