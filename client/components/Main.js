import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';

const Main = (props) => {

  const {children} = props;

  return (
    <div>
      <h1>Leja Design</h1>
      <nav>
        <div>
          <Link to="/home">Home</Link>
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
