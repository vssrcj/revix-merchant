/**
 *
 * List
 *
 */

import React from 'react';
import { List as AntList } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function List(props) {
  return (
    <AntList
      loading={props.loading}
      itemLayout="horizontal"
      loadMore={props.loadMore}
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      extra={props.extra}
      bordered={props.bordered}
      dataSource={props.dataSource}
      pagination={props.pagination}
      grid={props.grid}
      renderItem={(item) => <AntList.Item>{item}</AntList.Item>}
    />
  );
}

List.propTypes = {
  bordered: PropTypes.bool,
  // footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  grid: PropTypes.shape({}),
  // header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  // itemLayout: PropTypes.string,
  // rowKey: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  loadMore: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  pagination: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  // eslint-disable-next-line react/forbid-prop-types
  dataSource: PropTypes.any,
  // renderItem: PropTypes.node,
  // position: PropTypes.string,
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default List;
