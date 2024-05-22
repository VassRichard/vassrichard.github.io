import styled from 'styled-components';

export const PopupWrapper = styled.div`
    width: 400px;
    height: 100%;
`;

export const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const ModalContainer = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    width: 400px;
    max-width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CloseButton = styled.div`
    background: none;
    border: none;
    font-size: 1.5rem;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: #333;
`;