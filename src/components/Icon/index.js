/**
 *
 * Icon
 *
 */

import React from 'react';
import { Icon as AntIcon } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Icon(props) {
  return (
    <AntIcon
      type={props.type}
      style={props.style}
      theme={props.theme}
      spin={props.spin}
      rotate={props.rotate}
      twoToneColor={props.twoToneColor}
    />
  );
}

Icon.propTypes = {
  rotate: PropTypes.number,
  spin: PropTypes.bool,
  style: PropTypes.shape({}),
  theme: PropTypes.string,
  twoToneColor: PropTypes.string,
  type: PropTypes.string,
};

export default Icon;
