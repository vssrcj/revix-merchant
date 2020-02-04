/**
 *
 * TopNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuDropDown from '../MenuDropDown';

const NavPadding = styled.div`
   padding: 10px;
`;

const AlignRight = styled.div`
    text-align: right;
`;

function TopNav(props) {
  return (
    <NavPadding>
      {/* <Img /> */}
      <AlignRight>
        <MenuDropDown history={props.history} />
      </AlignRight>
    </NavPadding>
  );
}

TopNav.propTypes = {
  history: PropTypes.shape({}),
};

export default TopNav;
