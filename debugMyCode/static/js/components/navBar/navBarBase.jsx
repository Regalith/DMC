var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var Link = require('react-router').Link;
var Image = require('react-bootstrap').Image;
var LoginComponent = require('./login.jsx');


var NavBarComponent = React.createClass({


    render: function(){
        return (
            <div>
               <Navbar bsStyle="default" >
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
                                <LoginComponent />
                          </Nav>
                        </Navbar.Collapse>
                  </Navbar>

                 {this.props.children}
            </div>
         )
    }
});

module.exports = NavBarComponent;