import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export default function Content({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

Content.propTypes = {
  children: PropTypes.node,
};
