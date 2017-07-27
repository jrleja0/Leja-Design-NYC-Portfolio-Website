import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

const Main = (props) => {

  const {children} = props;

  return (
    <div>
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" to="home">
              <h1>Leja Design NYC</h1>
            </Link>
          </div>
        </div>
      </nav>
      <hr />
      {children}
    </div>
  );
};

/*///
 CONTAINER
*////
const mapState = (state) => {
  return {
  };
};

const mapDispatch = (dispatch) => {
  return {
  };
};

export default withRouter(connect(mapState, mapDispatch)(Main));

/*///
 PROP TYPES
*////
Main.propTypes = {
  children: PropTypes.object,
};
