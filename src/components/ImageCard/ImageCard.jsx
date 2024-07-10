import { ImageCardItem, ImageCardImg } from './ImageCard.styled';

export const ImageCard = ({ src, alt }) => {
  return (
    <ImageCardItem>
      <ImageCardImg src={src} alt={alt} />
    </ImageCardItem>
  );
};
