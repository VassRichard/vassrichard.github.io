import React from 'react';
import { ModalBackground, ModalContainer, CloseButton, JokeButton } from './Pop-up.css';
import { TechnologyConfigType } from "../../utils/types";

type PopupExampleProps = {
  technology: TechnologyConfigType;
  isOpen: boolean;
  closePopup: () => void;
};

export const PopupExample : React.FC<PopupExampleProps> = ({ technology, isOpen, closePopup }) => {

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
          <h2>{technology.title}</h2>
          <p>{technology.description}</p>
          {/* <h3>Skills</h3> */}
          {/* <JokeButton>
            Reveal pun */}
          {/* </JokeButton> */}
        </ModalContainer>
      </ModalBackground>
    </React.Fragment>
  );
};