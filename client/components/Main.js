import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {MainLogo} from './index';
import {handleImageOnLoad} from '..//utilityFunctions';

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
    if (this.state.menuActive) {
      body.style.overflow = 'auto';
      body.style.position = 'relative';
      navContact.style.visibility = '';
      navMenu.className = 'nav-menu';
      dropdown.style.display = 'none';
      this.setState({menuActive: false});
    } else {
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      navContact.style.visibility = 'hidden';
      navMenu.className += ' active';
      dropdown.style.display = 'block';
      this.setState({menuActive: true});
    }
  }

  hideMenu() {
    if (this.state.menuActive) {
      this.toggleMenu();
    }
  }

  mouseOverMenuOptions(event) {
    const dropdown = document.getElementsByClassName('dropdown-main-menu')[0];
    if (event.target.tagName === 'A') {
      let dropdownColor;
      const classNames = event.target.className.split(' ');
      if (classNames.length > 1) {
        classNames.forEach((className) => {
          if (className.indexOf('dropdown-main-menu-') !== -1) {
            dropdownColor = className;
          }
        });
      } else {
        dropdownColor = event.target.className;
      }
      switch (dropdownColor) {
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
    } else {
      if (event.target.tagName === 'SPAN') return;
      dropdown.className = `dropdown-main-menu ${
        this.props.pathBackgroundColors[this.props.pathName] || 'blue'}Background`;
    }
  }

  scrollUp() {
    const body = document.getElementsByTagName('body')[0];
    body.style.opacity = 0;
    window.setTimeout(() => {
      window.scrollTo(0, 0);
      body.style.opacity = 1;
    }, 300);
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
        <div className="container-fluid">
          <div className="row">
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
          </div>
        </div>
        <div className={`dropdown-main-menu ${
          this.props.pathBackgroundColors[this.props.pathName] || 'blue'}Background`
          } onMouseOver={this.mouseOverMenuOptions}>
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active"
                className="dropdown-main-menu-green"
                onClick={this.toggleMenu}>
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active"
                className="dropdown-main-menu-red"
                onClick={this.toggleMenu}>
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                  Contact
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" activeClassName="active"
                className="dropdown-main-menu-blue blue-with-red-highlight"
                onClick={this.toggleMenu}>
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                  Skills
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" activeClassName="active"
                className="dropdown-main-menu-green green-highlight"
                onClick={this.toggleMenu}>
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                  Coding Projects & Apps
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/art" activeClassName="active"
                className="dropdown-main-menu-blue yellow-highlight"
                onClick={this.toggleMenu}>
                <span>
                  <i className="fa fa-angle-double-right" aria-hidden="true" />
                  Art
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
          {this.props.children}
        <div className="position-relative">
          <img src="/assets/abstractions/cityscape_nyc_fade.jpg"
            alt="nyc b&w cityscape design"
            onLoad={handleImageOnLoad}
          />
          <div>
            <pre className="footer-text">
              <i className="fa fa-wrench" aria-hidden="true" />  J R Leja Design NYC    |    Jasiu Leja    |    2018
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
