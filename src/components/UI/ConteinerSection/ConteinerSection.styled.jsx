import styled from 'styled-components';

export const ConteinerSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 25px;

  width: 100%;

  margin: 0px auto;

  padding: 5vw;
  padding-bottom: 7vw;

  @media screen and (min-width: 768px) {
    padding: 30px;
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
