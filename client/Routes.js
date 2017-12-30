import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Router} from 'react-router';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
// import history from './history';
import {TransitionGroup, Transition, CSSTransition} from 'react-transition-group';
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
    const body = document.getElementsByTagName('body')[0];

    return (
      /* <Router history={history}> */
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
            onEnter={() => {
              console.log('onEnter', body);
              // body.style.opacity = 0;
              // window.setTimeout(() => {
              //   body.style.opacity = 1;
              // }, 1000);
            }}
            onExit={console.log('onExit')}
          >
            {(state) => (
              <div>
              {/* <div>{state}</div> */}
            <Main>
              <Switch location={location}>
                <Route path="/home" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/art" component={ArtShowcase} />
                <Route path="/contact" component={Contact} />
                <Redirect to="/home" />
              </Switch>
            </Main>
            </div>
            )}
          </CSSTransition>
        </TransitionGroup>
      )} />
      /* </Router> */
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
