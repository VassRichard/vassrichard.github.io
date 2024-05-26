import styled from 'styled-components';

export const PopupWrapper = styled.div`
    // width: 100%;
    // height: 100%;
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
    width: 50rem;
    height: 25rem;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    // max-width: 100%;
    // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

export const JokeButton = styled.div`
    // width: 10rem;
    // height: 2.5rem;
    margin: 0 20rem 0 20rem;
    padding: 0.25rem 0 0.25rem 0;
    background: none;
    border: 2px solid black;
    border-radius: 1rem;
    text-align: center;
    font-size: 1rem;
    // top: 1rem;
    // right: 1rem;
    cursor: pointer;
    color: #333;
`;