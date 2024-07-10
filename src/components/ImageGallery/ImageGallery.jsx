import { ImageCard } from '../ImageCard/ImageCard';
import { ImageGalleryList } from './ImageGallery.styled';
import { useState } from 'react';
import { ModalImage } from '../UI/ModalImage/ModalImage';

export const ImageGallery = ({ arrImage }) => {
  const [statusModal, setStatusModal] = useState(false);
  const [imgModal, setImgModal] = useState({ src: '', alt: '' });

  const openModal = ({ src, alt }) => {
    setStatusModal(true);
    setImgModal({ src, alt });
  };

  const closeModal = () => {
    setStatusModal(false);
  };
  return (
    <>
      <ImageGalleryList>
        {arrImage.map(({ id, webformatURL, tags, largeImageURL }) => (
          <ImageCard
            key={id}
            src={webformatURL}
            openModal={() => openModal({ src: largeImageURL, alt: tags })}
            alt={tags}
          />
        ))}
      </ImageGalleryList>
      <ModalImage
        src={imgModal.src}
        alt={imgModal.alt}
        isOpen={statusModal}
        closeModal={closeModal}
      />
    </>
  );
};
