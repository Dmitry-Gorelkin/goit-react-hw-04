import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 25px;

  padding-top: 5vw;
  padding-bottom: 5vw;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
