import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 15px;

  @media screen and (min-width: 425px) {
    gap: 15px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
