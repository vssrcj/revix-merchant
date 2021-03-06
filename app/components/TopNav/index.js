/**
 *
 * TopNav
 *
 */

import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Img from 'components/Img'
import MenuDropDown from 'components/MenuDropDown'
import styled from 'styled-components';

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
    history: PropTypes.object,
};

export default TopNav;
