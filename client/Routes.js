import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import history from './history';
import {Main, UserHome} from './components';

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
            <Route component={UserHome} />
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
