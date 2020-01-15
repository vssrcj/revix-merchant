/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 10px;
`;

export default function HomePage() {
    return (
        <Wrapper>
            <h1>Test</h1>
        </Wrapper>
    );
}
