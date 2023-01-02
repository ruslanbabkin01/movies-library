import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const BackLink = styled(Link)`
  color: #ffffff;
  background-color: #3f3f40;
  padding: 8px;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 8px;
  cursor: pointer;
  :hover,
  :focus {
    color: #000000;
    background-color: red;
  }
`;

export const TitleInfo = styled.h2`
  padding: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

export const AboutList = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const AboutLink = styled(NavLink)`
  color: ${props => props.theme.colors.text};
  padding: 8px;
  margin: 0 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  :hover,
  :focus {
    color: #000000;
    background-color: red;
  }
`;
