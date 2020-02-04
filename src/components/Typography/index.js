/**
 *
 * Typography
 *
 */

import React from 'react';
import { Typography as AntTypography } from 'antd';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const { Title, Paragraph, Text } = AntTypography;

function Typography(props) {
  if (props.title) {
    return (
      <Title
        code={props.code}
        copyable={props.copyable}
        delete={props.delete}
        disabled={props.disabled}
        ellipsis={props.ellipsis}
        level={props.level}
        mark={props.mark}
        underline={props.underline}
        type={props.type}
      >
        {props.displayText}
      </Title>
    );
  }

  if (props.paragraph) {
    return (
      <Paragraph
        code={props.code}
        copyable={props.copyable}
        delete={props.delete}
        disabled={props.disabled}
        ellipsis={props.ellipsis}
        mark={props.mark}
        underline={props.underline}
        strong={props.strong}
        type={props.type}
      >
        {props.displayText}
      </Paragraph>
    );
  }

  // props.text
  return (
    <Text
      code={props.code}
      copyable={props.copyable}
      delete={props.delete}
      disabled={props.disabled}
      ellipsis={props.ellipsis}
      mark={props.mark}
      underline={props.underline}
      strong={props.strong}
      type={props.type}
    >
      {props.displayText}
    </Text>
  );
}

Typography.propTypes = {
  code: PropTypes.bool,
  copyable: PropTypes.bool,
  delete: PropTypes.bool,
  disabled: PropTypes.bool,
  displayText: PropTypes.string,
  ellipsis: PropTypes.bool,
  level: PropTypes.number,
  mark: PropTypes.bool,
  paragraph: PropTypes.bool,
  strong: PropTypes.bool,
  title: PropTypes.bool,
  type: PropTypes.string,
  underline: PropTypes.bool,
};

export default Typography;
