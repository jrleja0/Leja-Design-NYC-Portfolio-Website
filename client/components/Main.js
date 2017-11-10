import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
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
        <Navbar className="stylingMainNavbar" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              {/* <Link className="mainTitle" to="/home" /> */}
              <Link className="main-title" to="/home">
                <svg width="360" height="50" textAnchor="middle" display="block">
                  <image className="jrlejaDesignNYCTitle"
                    x="0" y="0" width="360" height="50"
                    href="/assets/text/jrlejaDesignNYCTitle.png" />
                  <image className="jrlejaDesignNYCTitleHover"
                    x="0" y="-50" width="360" height="50"
                    href="/assets/text/jrlejaDesignNYCTitleHover.png" />
                </svg>
              </Link>
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
          {this.props.children}
        <div className="position-relative">
          <img className="img-fluid" src="/assets/abstractions/cityscape_nyc_fade.jpg" alt="nyc b&w cityscape design" />
          <div>
            <pre className="footer-text">
              <span className="glyphicon glyphicon-wrench" aria-hidden="true" />  J R Leja Design NYC    |    Jasiu Leja    |    2017
            </pre>
          </div>
          <div className="div-img-cover" />
          <div className="footer-linkToTop">
            { this.state.showScrollUpButton ?
              <div>
                <a role="button" tabIndex="0" onClick={this.scrollUp}>
                  <span className="glyphicon glyphicon-chevron-up" aria-hidden="true" />
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
