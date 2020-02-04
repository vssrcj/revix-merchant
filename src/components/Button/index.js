/**
 *
 * Button
 *
 */

import React from 'react';
import { Button as AntButton } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Button(props) {
  return (
    <AntButton
      disabled={props.disabled}
      ghost={props.ghost}
      href={props.href}
      htmlType={props.htmlType}
      icon={props.icon}
      loading={props.loading}
      shape={props.shape}
      size={props.size}
      target={props.target}
      type={props.type}
      onClick={props.onClick}
      block={props.block}
    >
      {props.title}
    </AntButton>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  ghost: PropTypes.bool,
  href: PropTypes.string,
  htmlType: PropTypes.string,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  shape: PropTypes.string,
  size: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  block: PropTypes.bool,
};

export default Button;
