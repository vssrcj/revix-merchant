/**
 *
 * MenuDropDown
 *
 */

import React, { useState, useCallback } from 'react';
import { Menu, Icon, Dropdown, Button } from 'antd';

const { SubMenu } = Menu;
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MenuDropDown(props) {
    const [current, setCurrent] = useState('');

    const handleClick = e => {
        console.log('click', e);

        setCurrent(e.key);
    };

    const routeToHome = useCallback(() => {
        props.history.push('/');
    }, [props.history]);

    const routeToProfile = useCallback(() => {
        props.history.push('/profile');
    }, [props.history]);

    const productMenu = (
        <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-evenly', width: '200px'}}>
            <Menu.Item key="products:1">Option 1</Menu.Item>
            <Menu.Item key="products:2">Option 2</Menu.Item>
        </Menu>
    );

    const menu2 = (
        <Menu onClick={handleClick} selectedKeys={[current]}>
            <Menu.Item key="company:1">Option 1</Menu.Item>
            <Menu.Item key="company:2">Option 2</Menu.Item>
        </Menu>
    );

    const menu3 = (
        <Menu onClick={handleClick} selectedKeys={[current]}>
            <Menu.Item key="support:1">Option 1</Menu.Item>
            <Menu.Item key="support:2">Option 2</Menu.Item>
            <Menu.Item key="support:3">Option 3</Menu.Item>
        </Menu>
    );

    const menu4 = (
        <Menu onClick={handleClick} selectedKeys={[current]}>
            <Menu.Item key="support:1">Option 1</Menu.Item>
            <Menu.Item key="support:2">Option 2</Menu.Item>
            <Menu.Item key="support:3">Option 3</Menu.Item>
        </Menu>
    );

    return (
        <div>
            <Dropdown
                overlay={productMenu}
                trigger={['click']}
                placement="bottomCenter">
                <Button>Products</Button>
            </Dropdown>

            <Dropdown
                overlay={menu2}
                trigger={['click']}
                placement="bottomCenter">
                <Button>Company</Button>
            </Dropdown>

            <Dropdown
                overlay={menu3}
                trigger={['click']}
                placement="bottomCenter">
                <Button>Support</Button>
            </Dropdown>

            <Dropdown
                overlay={menu4}
                trigger={['click']}
                placement="bottomCenter">
                <Button>ZAR</Button>
            </Dropdown>
        </div>
    );
}

MenuDropDown.propTypes = {};

export default MenuDropDown;
