/**
 *
 * MenuDropDown
 *
 */

import React from 'react';
import { Link } from 'gatsby';
import {
  Dropdown, Button, Row, Col,
} from 'antd';
import menuItems from './menu-items';
import {
  MenuContent, ColName, ColContent, RowName, RowDescription, RowContent,
} from './styles';


function MenuDropDown() {
  return menuItems.map((menuItem) => (
    <Dropdown
      key={menuItem.name}
      overlay={(
        <MenuContent>
          <Row>
            {menuItem.columns.map((column, ci) => (
              <Col key={ci} md={8}>
                <ColContent>
                  {column.name && <ColName>{column.name}</ColName>}
                  <ul>
                    {column.rows.map((row, ri) => (
                      <li key={ri}>
                        <Link to="/page-2/">
                          <img src={row.icon} alt="icon" />
                          <RowContent>
                            <RowName>{row.name}</RowName>
                            <RowDescription>{row.description}</RowDescription>
                          </RowContent>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ColContent>
              </Col>
            ))}
          </Row>
        </MenuContent>
      )}
      trigger={['click']}
      placement="bottomCenter"
    >
      <Button>{menuItem.name}</Button>
    </Dropdown>
  ));
}

MenuDropDown.propTypes = {};

export default MenuDropDown;
