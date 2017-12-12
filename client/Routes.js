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

  onTransEnter() {
    console.log('hit enter');
    const body = document.getElementsByTagName('body')[0];
    body.style.opacity = 1;
  }

  onTransExit() {
    console.log('hit exit');
    const body = document.getElementsByTagName('body')[0];
    body.style.opacity = 0;
  }

  render () {
    console.log('loc', location.pathname.split('/')[1] || '/', this.props.location.pathname.split('/')[1]);

    return (
      // <Router history={history}>
        <TransitionGroup>
          <Transition timeout={3000} mountOnEnter={true} unmountOnExit={true} appear
            onEnter={this.onTransEnter} onExit={this.onTransExit}>
            {/* {(status => {
              const body = document.getElementsByTagName('body')[0];
              switch (status) {
                case 'entering':
                  body.style.opacity = 1;
                  break;
                case 'exiting':
                  body.style.opacity = 0;
              }
              console.log('status', status); */}
          {/* <CSSTransition key={this.props.location.pathname.split('/')[1] || '/'} timeout={3000} appear
            classNames="fading-transition" mountOnEnter={true} unmountOnExit={true}> */}
              {/* return ( */}
                <Main>
                  <Switch location={this.props.location}>
                    <Route path="/home" component={Home} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/art" component={ArtShowcase} />
                    <Route path="/contact" component={Contact} />
                    <Redirect to="/home" />
                  </Switch>
                </Main>
              {/* ); */}
          {/* </CSSTransition> */}
            {/* })} */}
          </Transition>
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
