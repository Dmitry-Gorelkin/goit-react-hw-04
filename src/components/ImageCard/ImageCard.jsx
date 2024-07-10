import { ImageCardItem, ImageCardImg } from './ImageCard.styled';

export const ImageCard = ({ src, alt, openModal }) => {
  return (
    <ImageCardItem onClick={openModal}>
      <ImageCardImg src={src} alt={alt} />
    </ImageCardItem>
  );
};
