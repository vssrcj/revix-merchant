import styled from 'styled-components';

export const MenuContent = styled.div`
  background: #F6F5FF;
  box-shadow: 0px 10px 30px rgba(33, 46, 238, 0.3);
  margin: 0 10px;
  border-radius: 3px;
`;

export const ColName = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: #9BA1BE;
`;

export const ColContent = styled.div`
  padding: 40px;
  display: inline-block;
  white-space: nowrap;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    display: flex;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const RowName = styled.h5`
  font-size: 22px;
  line-height: 110%;
  letter-spacing: 0.02em;
  color: #101239;
  margin-bottom: 0;
`;

export const RowDescription = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.02em;
  color: #9BA1BE;
`;

export const RowContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
