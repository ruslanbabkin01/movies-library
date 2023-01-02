import styled from 'styled-components';

export const ActorsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 12px;
  gap: 12px;
`;

export const Actor = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 50px) / 5);
`;

export const Foto = styled.img`
  width: 100%;
  flex-grow: 1;
`;

export const ActorInfo = styled.div`
  padding: 8px;
`;

