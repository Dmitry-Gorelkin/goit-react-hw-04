import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: block;

  margin: 0px auto;

  padding: 5vw;

  width: 100%;

  background-color: ${p => p.theme.colors.backgroundSecondary};

  @media screen and (min-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    padding: 30px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
