import Modal from 'react-modal';

const customStyles = {
  overlay: {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0px',
    overflow: 'auto',
    width: 'auto',
    borderRadius: '10px',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalImage = ({ src, alt, isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};
