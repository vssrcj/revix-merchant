/**
 *
 * TopNav
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuDropDown from '../MenuDropDown';
import logo from '../../images/logo.png';

const NavPadding = styled.div`
  height: 80px;
`;

const AlignRight = styled.div`
  margin-left: auto;
`;

const Fixed = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  left: 0;
  padding: 10px 20px;
`;

const Logo = styled.img`
`;

function TopNav(props) {
  return (
    <NavPadding>
      <Fixed>
        <Logo src={logo} />
        <AlignRight>
          <MenuDropDown history={props.history} />
        </AlignRight>
      </Fixed>
    </NavPadding>
  );
}

TopNav.propTypes = {
  history: PropTypes.shape({}),
};

export default TopNav;
