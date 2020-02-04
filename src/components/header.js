// import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Layout, Menu } from 'antd';

const StyledHeader = styled(Layout.Header)`
  display: flex;
  background: transparent;
  .ant-menu {
    background: transparent;
    margin-left: auto;
  }
  .ant-menu-item {
    font-family: sans-serif;
    font-size: 14px;
    color: #101239;
    font-weight: 600;
    line-height: 42px;
    &:hover {
      background-color: #ddd;
    }
  }
  .ant-menu-item-selected {
    > div {
      color: #212EEE;
    }
    .dash {
      display: block;
    }
  }
  .ant-menu.ant-menu-dark .ant-menu-item-selected {
    background-color: transparent;
  }
  .dash {
    display: none;
    position: absolute;
    bottom: 0;
    left: 5px;
    right: 5px;
  }
`;
const Logo = styled.div`
`;
const MenuContent = styled.div`
  position: relative;
`;
// <Link
//   to="/"
//   style={{
//     color: 'white',
//     textDecoration: 'none',
//   }}
// >
//   {siteTitle}
// </Link>
const Dash = styled.div`
  border-bottom: 4px solid #212EEE;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">
        <MenuContent>
          Products
          <Dash className="dash" />
        </MenuContent>
      </Menu.Item>
      <Menu.Item key="2">
        <MenuContent>
          Company
          <Dash className="dash" />

        </MenuContent>
      </Menu.Item>
      <Menu.Item key="3">
        <MenuContent>
          Support
          <Dash className="dash" />

        </MenuContent>
      </Menu.Item>
    </Menu>
  </StyledHeader>
);

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// };

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
