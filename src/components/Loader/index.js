/**
 *
 * Loader
 *
 */

import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Loader(props) {
  return (
    <Spin
      delay={props.delay}
      indicator={props.indicator}
      size={props.size}
      spinning={props.spinning}
      tip={props.tip}
      wrapperClassName={props.wrapperClassName}
    />
  );
}

Loader.propTypes = {
  delay: PropTypes.number,
  indicator: PropTypes.node,
  size: PropTypes.string,
  spinning: PropTypes.bool,
  tip: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Loader;
