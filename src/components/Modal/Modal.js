import React, {  useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalClose,
  StyledImage,
} from './Modal.styled'; 

const Modal = ({ item, closeModal }) => {
  
  const getImageSize = (url) => {
    const img = new Image();
    img.src = url;    
  };
  
  useEffect(() => {
    getImageSize(item.img);
  }, [item.img]);

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalClose onClick={closeModal}>&times;</ModalClose>
        <h2>
          {item.make} {item.model}
        </h2>
        <StyledImage src={item.img} alt="car" />
        <p>Description: {item.description}</p>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
