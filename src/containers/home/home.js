import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';

import { columns } from './tableData';
import { dateCompare, nameCompare } from '../../helpers/sort';
import authActions from '../../redux/api/actions';

const { getDataRequest } = authActions;

class Home extends Component {
  state = {
    sortOrder: true,
  };

  componentDidMount() {
    const { getDataRequest } = this.props;

    getDataRequest();
  }

  toggleSortOrder = () => {
    this.setState(prevState => ({
      sortOrder: !prevState.sortOrder,
    }));
  };

  render() {
    const { data } = this.props;
    const { sortOrder } = this.state;

    const tableData = sortOrder
      ? data.sort(dateCompare)
      : data.sort(nameCompare);
    const btnText = sortOrder ? 'Sort By Name' : 'Sort By Creation Date';

    return (
      <div className="home-container">
        <Button onClick={this.toggleSortOrder}>{btnText}</Button>
        <br />
        <Table columns={columns} dataSource={tableData} />
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
