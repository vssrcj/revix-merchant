/* eslint-disable react/prop-types */
import React from 'react';
import Content from '../../components/Content';
import useRequest from './use-request';

const Header = () => {
  const { heading, subHeading, imageUrl } = useRequest();

  return (
    <Content>
      <h1>{heading}</h1>
      <p>{subHeading}</p>
      <img src={imageUrl} alt="header" />
    </Content>
  );
};

export default Header;
