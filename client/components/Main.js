import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {MainLogo} from './index';
import {Nav, Navbar, NavDropdown, NavItem, MenuItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

/*///
 COMPONENT
*////
class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showScrollUpButton: false
    };

    this.scrollUp = this.scrollUp.bind(this);
    this.handleScrollUpButton = this.handleScrollUpButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollUpButton);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollUpButton);
  }

  scrollUp() {
    window.scrollTo(0, 0);
  }

  handleScrollUpButton() {
    if (!this.state.showScrollUpButton && window.scrollY > 980) {
      this.setState({ showScrollUpButton: true });
    } else if (this.state.showScrollUpButton && window.scrollY < 980) {
      this.setState({ showScrollUpButton: false });
    }
  }

  render() {
    return (
      <div>
      {/*
        <nav className="stylingMainNavbar">
          <div className="container">
            <div className="navbar-header">
              <Link className="mainTitle" to="/home" />
      */}
        <div className="main-navbar-styling">
          {/* <div className="col-lg-4 col-md-6 col-sm-6"> */}
          <div className="main-logo-container">
            <MainLogo className="main-logo-lg" width="380" height="70" display="block"
              leftPadding="12" topPadding="6" />
            <MainLogo className="main-logo-sm" width="270" height="50" display="none"
              leftPadding="12" topPadding="6" />
          </div>
          {/* <div className="col-lg-4 col-md-6 col-sm-6"> */}
          <div className="main-nav-buttons">
            <div className="nav-contact">
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
            <div className="nav-menu">
              <a role="button" tabIndex="0" onClick={this.showMenu}>
                <span>Menu</span>
                <i className="fa fa-bars" aria-hidden="true" />
              </a>
            </div>
            {/* <div id="navbar-projects-dropdown"><span>Menu</span>
              <Link className="dropdownMenuItem" to="/projects" activeClassName="active">
                <div><span>Projects & Apps</span></div>
              </Link>
              <Link className="dropdownMenuItem" to="/art" activeClassName="active">
                <div><span>Art</span></div>
              </Link>
            </div> */}
          </div>
          {/* </div> */}
          {/* <div className="col-lg-4" /> */}
        </div>
        <div className="dropdown-main-menu">
          <div className="main-logo-container">
            <MainLogo className="main-logo-lg" width="380" height="70" display="block"
              leftPadding="12" topPadding="6" />
            <MainLogo className="main-logo-sm" width="270" height="50" display="none"
              leftPadding="12" topPadding="6" />
          </div>
          <div>
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Projects & Apps</li>
              <li>Art</li>
            </ul>
          </div>
        </div>
        <Navbar className="main-navbar-styling" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <MainLogo width={360} height={50} display="block"
                leftPadding="12" topPadding="6" />
              {/* <MainLogo width="270" height="50" display="none"
                    leftPadding="12" topPadding="6" /> */}
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="main-nav-buttons navbar-float-tabs">
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
          {this.props.children}
        <div className="position-relative">
          <img className="img-fluid" src="/assets/abstractions/cityscape_nyc_fade.jpg" alt="nyc b&w cityscape design" />
          <div>
            <pre className="footer-text">
              <i className="fa fa-wrench" aria-hidden="true" />  J R Leja Design NYC    |    Jasiu Leja    |    2017
            </pre>
          </div>
          <div className="div-img-cover" />
          <div className="footer-linkToTop">
            { this.state.showScrollUpButton ?
              <div>
                <a role="button" tabIndex="0" onClick={this.scrollUp}>
                  <i className="fa fa-chevron-up" aria-hidden="true" />
                </a>
              </div>
              : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Main;

/*///
 PROP TYPES
*////
Main.propTypes = {
  children: PropTypes.object,
};
