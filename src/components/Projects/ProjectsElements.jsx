/* eslint-disable */

import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  min-width: 100vw;
  padding: 2rem;
  min-height: 80vh;
  text-align: center;
  background-color: ${(props) => props.theme.primaryBackgroundColor}; 

`;

export const CardWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
  margin-bottom: 4rem;
  @media (max-width: 1380px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1058px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 716px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectTitle = styled.h1`
  color: ${(props) => props.theme.primaryTitleColor};
  text-align: center;
  margin-bottom: 3rem;

`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
