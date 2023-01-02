import styled from 'styled-components';

export const ReviewsTitle = styled.h3`
  padding: 20px;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 16px;
`;

export const AuthorName = styled.span`
  margin-left: 8px;
  font-weight: 500;
`;

export const ReviewsText = styled.p`
  margin-top: 12px;
  line-height: 1.4;
`;

export const DontReviews = styled.p`
  margin: 10px;
  text-align: center;
  color: red;
`;
