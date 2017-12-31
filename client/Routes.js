import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {ArtShowcase, Contact, Main, ProjectsHighlight, ProjectsPage, Slideshow, Welcome} from './components';
import { fetchImages } from './store';

const pathBackgroundColors = {
  '/home': 'green',
  '/contact': 'red',
  '/projects': 'green',
  '/art': 'blue',
};

const Home = () => (
  <div className="green-fixed-background">
    <Slideshow />
    <Welcome />
    <ProjectsHighlight />
    <div className="red-fixed-small-background">
      <Contact />
    </div>
  </div>
);

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
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/art" component={ArtShowcase} />
                <Route path="/contact" component={Contact} />
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
