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
        <div className="main-navbar-styling">
          <div className="main-logo-container">
            <MainLogo className="main-logo-lg" width="380" height="70" display="block"
              leftPadding="12" topPadding="6" />
            <MainLogo className="main-logo-sm" width="270" height="50" display="none"
              leftPadding="12" topPadding="6" />
          </div>
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
          </div>
        </div>
        <div className="dropdown-main-menu">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active">Coding Projects & Apps</NavLink>
            </li>
            <li>
              <NavLink to="/art" activeClassName="active">Art</NavLink>
            </li>
          </ul>
        </div>
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
