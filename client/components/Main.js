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

{
//
// just bootstrap
//
}
      {/*<nav className="navbar navbar-fixed-top navbar-inverse black-with-red">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <Link className="navbar-brand mainTitle" to="/home" />
          </div>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Projects, Apps, & Art
                  <span className="caret" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/projects">Projects & Apps</Link>
                  </li>
                  <li>
                    <Link to="/">Art</Link>
                  </li>
                </ul>
              </li>*/}
              {/*<li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects, Apps, & Art</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/projects">Projects & Apps</Link>
                  <Link className="dropdown-item" to="/">Art</Link>
                </div>
              </li>*/}
              {/*<li>
                <Link to="/projects">Projects & Apps</Link>
              </li>*/}
              {/*<li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>*/}

{
//
//first attempt:
//
}
      {/*<nav className="navbar navbar-toggleable-md navbar-inverse navbar-fixed-top black-with-red" role="navigation">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link className="navbar-brand mainTitle" to="home" />
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="projects">Projects & Art</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>*/}


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
