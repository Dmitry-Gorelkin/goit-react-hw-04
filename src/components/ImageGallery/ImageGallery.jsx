import { ImageCard } from '../ImageCard/ImageCard';
import { ImageGalleryList } from './ImageGallery.styled';

export const ImageGallery = ({ arrImage }) => {
  return (
    <ImageGalleryList>
      {arrImage.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageCard key={id} src={webformatURL} alt={tags} modalImage={largeImageURL} />
      ))}
    </ImageGalleryList>
  );
};
