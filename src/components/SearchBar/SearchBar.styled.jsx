import styled from 'styled-components';

export const SearchBarBox = styled.div`
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const SearchBarContainer = styled.div`
  display: block;

  width: 100%;

  background-color: ${p => p.theme.colors.backgroundSecondary};

  @media screen and (min-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
