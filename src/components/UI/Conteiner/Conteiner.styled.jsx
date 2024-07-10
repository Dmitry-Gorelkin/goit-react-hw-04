import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin: 0px auto;

  padding-left: 5vw;
  padding-right: 5vw;

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
