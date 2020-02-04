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
  type: PropTypes.string,
  style: PropTypes.shape({}),
  theme: PropTypes.string,
  spin: PropTypes.bool,
  rotate: PropTypes.number,
  twoToneColor: PropTypes.string,
};

export default Icon;
