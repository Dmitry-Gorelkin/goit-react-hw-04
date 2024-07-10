import { ImageCard } from '../ImageCard/ImageCard';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ arrImage }) => {
  return (
    <ImageGalleryList>
      {arrImage.map(({ id, webformatURL, tags }) => (
        <ImageCard key={id} src={webformatURL} alt={tags} />
      ))}
    </ImageGalleryList>
  );
};
