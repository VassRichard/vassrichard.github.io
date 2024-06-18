import styled from 'styled-components';
import Laptop from "../../assets/wallpapers/laptop.jpg";

export const FooterContainer = styled.div`
    height: 17rem;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)), url(${Laptop}) fixed center;
    background-size: cover;
    font-size: 1rem;
    font-weight: 50;
    letter-spacing: 0.01rem;
`;

export const FooterCopyright = styled.div`
    text-align: center;
`;