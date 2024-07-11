import styled from 'styled-components';

export const ImageCardItem = styled.li`
  display: block;

  width: 90vw;
  height: 90vw;

  cursor: zoom-in;

  border-radius: 8px;
  overflow: hidden;

  transition: box-shadow 0.3s ease;

  background-color: ${p => p.theme.colors.backgroundimage};

  &:hover {
    box-shadow: 0 0 10px ${p => p.theme.colors.backgroundSecondary};
    border-radius: unset;
  }

  @media screen and (min-width: 425px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
    height: 350px;
  }
`;

export const ImageCardImg = styled.img`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;
