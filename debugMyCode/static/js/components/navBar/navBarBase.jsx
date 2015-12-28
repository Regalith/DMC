var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var NavItem = require('react-bootstrap').NavItem;
var MenuItem = require('react-bootstrap').MenuItem;
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var Link = require('react-router').Link;
var Image = require('react-bootstrap').Image;



module.exports  =NavBarComponent = React.createClass({
    render: function(){
        return (
            <div>
               <Navbar bsStyle="default" >
                    <Navbar.Header>
                            <Link to="/"><img src="../static/build/img/Logo.png" /></Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                          <Nav>
                            <NavItem eventKey={1} href="#"> Link</NavItem>
                            <NavItem eventKey={2} href="#">Link</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                  <MenuItem eventKey={3.1} href="boop">Action </MenuItem>
                                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                  <MenuItem divider />
                                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                          </Nav>
                          <Nav pullRight>
                                <NavItem eventKey={2} href="#">Login</NavItem>
                          </Nav>
                        </Navbar.Collapse>
                  </Navbar>
                 {this.props.children}
            </div>
         )
    }
});