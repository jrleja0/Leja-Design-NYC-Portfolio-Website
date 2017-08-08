import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';

/*///
 COMPONENT
*////
const Main = (props) => {

  const {children} = props;

  return (
    <div>
      <Navbar className="stylingMainNavbar" fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className="mainTitle" to="home" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="navbar-float-tabs">
            <NavDropdown className="dropdownHighlight" eventKey={1} title="Projects, Apps, & Art" id="navbar-projects-dropdown">
              <MenuItem className="dropdownHighlightMenuItem" eventKey={1.1}>
                <Link to="projects">Projects & Apps</Link>
              </MenuItem>
              <MenuItem className="dropdownHighlightMenuItem" eventKey={1.2}>Art</MenuItem>
            </NavDropdown>
            <NavItem className="contactHighlight" eventKey={2}>
              <Link to="contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        {children}
      <div className="position-relative">
        <img className="img-fluid" src="/assets/abstractions/cityscape_nyc_fade.jpg" alt="nyc b&w cityscape design" />
        <div className="div-img-cover" />
      </div>
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = (state) => {
  return {
  };
};

const mapDispatch = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapState, mapDispatch)(Main));

/*///
 PROP TYPES
*////
Main.propTypes = {
  children: PropTypes.object,
};
