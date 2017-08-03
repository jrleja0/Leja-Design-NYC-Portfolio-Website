import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

/*///
 COMPONENT
*////
const Main = (props) => {

  const {children} = props;

  return (
    <div>
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-10">
              <Link className="navbar-brand mainTitle" to="home" />
            </div>
            <div className="col-lg-6 col-md-4 col-sm-2" />
          </div>
        </div>
      </nav>
        {children}
      <img className="img-fluid" src="/assets/abstractions/cityscape_nyc_fade.jpg" alt="nyc b&w cityscape design" />
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
