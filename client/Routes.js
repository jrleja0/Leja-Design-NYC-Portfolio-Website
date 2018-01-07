import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {ArtShowcase, Contact, Main, ProjectsHighlight, ProjectsPage, Skills, Slideshow, Welcome} from './components';
import { fetchImages } from './store';

const pathBackgroundColors = {
  '/home': 'green',
  '/contact': 'red',
  '/projects': 'green',
  '/art': 'blue',
};

class Home extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleHomeBackgroundColor);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleHomeBackgroundColor);
  }

  handleHomeBackgroundColor() {
    const homeBackgrounds = [...document.getElementsByClassName('home-background')];
    homeBackgrounds.forEach(background => {
      background.style.zIndex = -999;
      background.style.opacity = 0;
    });
    if (window.scrollY < 3125 || window.scrollY > 4825 ) {  // green
      homeBackgrounds[2].style.zIndex = -998;
      homeBackgrounds[2].style.opacity = 1;
    } else if (window.scrollY < 3875) {  // blue
      homeBackgrounds[1].style.zIndex = -998;
      homeBackgrounds[1].style.opacity = 1;
    } else {
      homeBackgrounds[0].style.zIndex = -998;  // red
      homeBackgrounds[0].style.opacity = 1;
    }
  }

  render() {
    return (
      <div>
        <Slideshow />
        <Welcome />
        <ProjectsHighlight />
        <Skills />
        <Contact />
        <div className="home-background red-fixed-background" />
        <div className="home-background blue-fixed-background" />
        <div className="home-background green-fixed-background" />
      </div>
    );
  }
}

/*///
 COMPONENT
*////
class Routes extends Component {

  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    return (
      <Route render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.pathname.split('/')[1] || '/'}
            timeout={{
              enter: 1600,
              exit: 750,
              }} appear
            classNames="fading-transition"
            mountOnEnter={true}
            unmountOnExit={true}
          >
            <Main pathName={location.pathname} pathBackgroundColors={pathBackgroundColors}>
              <Switch location={location}>
                <Route path="/home" component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/skills" component={Skills} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/art" component={ArtShowcase} />
                <Redirect to="/home" />
              </Switch>
            </Main>
          </CSSTransition>
        </TransitionGroup>
      )} />
    );
  }
}

/*///
 CONTAINER
*////
const mapState = null;

const mapDispatch = (dispatch) => ({
  loadInitialData: () => {
    dispatch(fetchImages());
  }
});

export default withRouter(connect(mapState, mapDispatch)(Routes));

/*///
 PROP TYPES
*////
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};
