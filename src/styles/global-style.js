import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    /* TODO: add Bozon font? */
    font-family: sans-serif; 
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: ${(props) => props.theme.darkGrey};
  }
`;
