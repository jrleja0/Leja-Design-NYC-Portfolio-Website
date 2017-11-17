import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {MainLogo} from './index';

/*///
 COMPONENT
*////
class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuActive: false,
      showScrollUpButton: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.mouseOverMenuOptions = this.mouseOverMenuOptions.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
    this.handleScrollUpButton = this.handleScrollUpButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScrollUpButton);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScrollUpButton);
  }

  toggleMenu() {
    const body = document.getElementsByTagName('body')[0];
    const navContact = document.getElementsByClassName('nav-contact')[0];
    const navMenu = document.getElementsByClassName('nav-menu')[0];
    const dropdown = document.getElementsByClassName('dropdown-main-menu')[0];
    if (!this.state.menuActive) {
      body.style.overflow = 'hidden';
      navContact.style.visibility = 'hidden';
      navMenu.className += ' active';
      dropdown.style.display = 'block';
      this.setState({menuActive: true});
    } else {
      body.style.overflow = 'auto';
      navContact.style.visibility = '';
      navMenu.className = 'nav-menu';
      dropdown.style.display = 'none';
      this.setState({menuActive: false});
    }
  }

  hideMenu() {
    if (this.state.menuActive) {
      this.toggleMenu();
    }
  }

  mouseOverMenuOptions(event) {
    const dropdown = document.getElementsByClassName('dropdown-main-menu')[0];
    if (event.target.tagName === 'LI') {
      switch (event.target.className) {
        case 'dropdown-main-menu-blue':
          dropdown.className = 'dropdown-main-menu blueBackground';
          break;
        case 'dropdown-main-menu-green':
          dropdown.className = 'dropdown-main-menu greenBackground';
          break;
        case 'dropdown-main-menu-red':
          dropdown.className = 'dropdown-main-menu redBackground';
          break;
        default:
          dropdown.className = 'dropdown-main-menu blueBackground';
      }
    }
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
            <MainLogo className="main-logo-lg" width="380" height="70"
              display="block" leftPadding="12" topPadding="6"
              hideMenu={this.hideMenu} />
            <MainLogo className="main-logo-sm" width="270" height="50"
              display="none" leftPadding="12" topPadding="6"
              hideMenu={this.hideMenu} />
          </div>
          <div className="main-nav-buttons">
            <div className="nav-contact">
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>
            <div className="nav-menu">
              <a role="button" tabIndex="0" onClick={this.toggleMenu}>
                <span>Menu</span>
                <i className="fa fa-bars" aria-hidden="true" />
                <i className="fa fa-times-circle" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="dropdown-main-menu blueBackground" onMouseOver={this.mouseOverMenuOptions}>
          <ul>
            <li className="dropdown-main-menu-blue">
              <NavLink to="/home" activeClassName="active" onClick={this.toggleMenu}>Home</NavLink>
            </li>
            <li className="dropdown-main-menu-red">
              <NavLink to="/contact" activeClassName="active" onClick={this.toggleMenu}>Contact</NavLink>
            </li>
            <li className="dropdown-main-menu-green">
              <NavLink to="/projects" activeClassName="active" onClick={this.toggleMenu}>Coding Projects & Apps</NavLink>
            </li>
            <li className="dropdown-main-menu-blue">
              <NavLink to="/art" activeClassName="active" onClick={this.toggleMenu}>Art</NavLink>
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
