import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import authActions from '../../redux/api/actions';

const { getDataRequest } = authActions;

class Home extends Component {
  componentDidMount() {
    const { getDataRequest } = this.props;

    getDataRequest();
  }

  render() {
    const { data } = this.props;

    console.log(data);
    return (
      <div>
        <div>Home Page</div>
      </div>
    );
  }
}

Home.propTypes = {
  getDataRequest: PropTypes.func.isRequired,
  data: PropTypes.array,
  error: PropTypes.string,
};

const mapStateToProps = state => ({
  data: state.Api.data,
  error: state.Api.error,
});

const mapDispatchToProps = {
  getDataRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
