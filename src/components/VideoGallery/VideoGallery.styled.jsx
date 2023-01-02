import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 12px;
  gap: 14px;
`;

export const MovieItem = styled.li`
  flex-basis: 18%;
  box-shadow: ${props => props.theme.shadows.small};
`;

export const MovieImg = styled.img`
  object-fit: cover;
  transition: ${props => props.theme.animation.cubicBezier};

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export const LinkMovie = styled(Link)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  margin-top: 12px;
  text-align: center;
`;
