import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

const Main = (props) => {

  const {children} = props;

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="home">
              <span className="h1">
                Leja Design NYC
              </span>
            </Link>
          </div>
        </div>
      </nav>
      <hr />
        {children}
      <hr />
      <img className="img-fluid" src="/assets/abstractions/cityscape_nyc_bw.jpg" alt="nyc b&w cityscape" />
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
