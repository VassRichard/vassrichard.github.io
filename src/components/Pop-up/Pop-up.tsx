import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

type PopupExampleProps = {
  isOpen: boolean;
  closePopup: () => void;
};

export const PopupExample: React.FC<PopupExampleProps> = ({ isOpen, closePopup }) => (
  <Popup open={isOpen} onClose={closePopup} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);