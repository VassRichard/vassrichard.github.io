import React from 'react';
import { ModalBackground, ModalContainer, CloseButton } from './Pop-up.css';

type PopupExampleProps = {
  isOpen: boolean;
  closePopup: () => void;
};

export const PopupExample : React.FC<PopupExampleProps> = ({ isOpen, closePopup }) => {

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  if (!isOpen) return null;

  return (
    <React.Fragment>
      <ModalBackground onClick={handleBackgroundClick}>
        <ModalContainer>
          <CloseButton onClick={closePopup}>&times;</CloseButton>
          <h2>UNDER DEVELOPMENT</h2>
          <p>Don't you worry, you'll be able to look at it soon.</p>
        </ModalContainer>
      </ModalBackground>
    </React.Fragment>
  );
};