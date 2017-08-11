import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

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
            <Link className="mainTitle" to="/home" activeClassName="active" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav id="main-nav" className="navbar-float-tabs">
            <NavDropdown eventKey={1} title="Projects | Apps | Art" id="navbar-projects-dropdown">
              <LinkContainer className="dropdownMenuItem" to="/projects" activeClassName="active">
                <MenuItem eventKey={1.1}>Projects & Apps</MenuItem>
              </LinkContainer>
              <LinkContainer className="dropdownMenuItem" to="/art" activeClassName="active">
                <MenuItem eventKey={1.2}>Art</MenuItem>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer className="nav-contact" to="/contact" activeClassName="active">
              <NavItem eventKey={2}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <span id="top" />
        {children}
      <div className="position-relative">
        <img className="img-fluid" src="/assets/abstractions/cityscape_nyc_fade.jpg" alt="nyc b&w cityscape design" />
        <div>
          <pre className="footer-text">
            <span className="glyphicon glyphicon-wrench" aria-hidden="true" />  J R Leja Design NYC    |    Jasiu Leja    |    2017
          </pre>
        </div>
        <div className="div-img-cover" />
        <div className="footer-linkToTop">
          <a href="#top">
            <span className="glyphicon glyphicon-chevron-up" aria-hidden="true" />
          </a>
        </div>
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
