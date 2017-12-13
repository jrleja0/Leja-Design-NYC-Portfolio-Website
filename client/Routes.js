import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Router} from 'react-router';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
// import history from './history';
import {TransitionGroup, CSSTransition, Transition} from 'react-transition-group';
import {ArtShowcase, Contact, Main, Projects, Slideshow, Welcome} from './components';
import { fetchImages } from './store';

const Home = () => (
  <div className="green-fixed-background">
    <Slideshow />
    <Welcome />
    <Projects />
    <div className="red-fixed-small-background">
      <Contact />
    </div>
  </div>
);

/*///
 COMPONENT
*////
class Routes extends Component {

  componentDidMount () {
    this.props.loadInitialData();
  }

  render () {
    console.log('loc', location.pathname.split('/')[1] || '/', this.props.location.pathname.split('/')[1]);

    return (
      // <Router history={history}>
        <TransitionGroup>
          <CSSTransition key={this.props.location.pathname.split('/')[1] || '/'} timeout={3000} appear
            classNames="fading-transition" mountOnEnter={true} unmountOnExit={true}>
            <Main>
              <Switch location={this.props.location}>
                <Route path="/home" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/art" component={ArtShowcase} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/home" />
              </Switch>
            </Main>
          </CSSTransition>
        </TransitionGroup>
      // </Router>
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
