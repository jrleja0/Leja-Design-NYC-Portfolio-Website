import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Redirect, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Contact, Main, Projects, Resume} from './components';

const Home = () => (
  <div>
    <Projects />
    <Contact />
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

    return (
      <Router history={history}>
        <Main>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/home" />
          </Switch>
        </Main>
      </Router>
    );
  }
}

/*///
 CONTAINER
*////
const mapState = (state) => {
  return {
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(/* fetch data*/);
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);

/*///
 PROP TYPES
*////
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
};
