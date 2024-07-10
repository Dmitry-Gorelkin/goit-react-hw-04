import { useState } from 'react';
import { ModalImage } from '../UI/ModalImage/ModalImage';
import { ImageCardItem, ImageCardImg } from './ImageCard.styled';

export const ImageCard = ({ src, alt, modalImage }) => {
  const [statusModal, setStatusModal] = useState(false);

  const openModal = () => {
    setStatusModal(true);
  };

  const closeModal = () => {
    setStatusModal(false);
  };

  return (
    <ImageCardItem onClick={openModal}>
      <ImageCardImg src={src} alt={alt} />
      <ModalImage src={modalImage} alt={alt} isOpen={statusModal} closeModal={closeModal} />
    </ImageCardItem>
  );
};
