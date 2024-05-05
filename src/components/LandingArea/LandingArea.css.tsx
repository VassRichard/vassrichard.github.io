import styled from 'styled-components';
import LandingAreaWallpaper from '../../assets/LandingArea.jpeg';
import PersonImage from '../../assets/PersonImage.png';

export const LandingAreaWrapper = styled.div`
    height: 100vh;
    position: relative;
    background: url(${LandingAreaWallpaper}) center center;
    background-size: contain;
`;

export const DescriptionWrapper = styled.div`
    width: 35%;
    top: 17.5%;
    left: 5%;
    position: absolute;
    font-size: 2rem;
    color: White;
`;

export const PersonWrapper = styled.div`
    height: 85vh;
    position: relative;
    top: 15%;
    margin: 0 0 0 5.5rem;
    opacity: 0.75;
    background: url(${PersonImage}) center center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const RoleWrapper = styled.div`
    width: 71%;
    font-family: 'Aspekta', sans-serif;
    letter-spacing: 0.15rem;
`;

export const FirstLine = styled.div`
    text-align: left;    
`;

export const SecondLine = styled.div`
    text-align: right;
    font-weight: bold;
`;

export const Separator = styled.div`
    width: 50%;
    height: 5px;
    background: White;
    margin: 2rem 0 2rem 0;
    opacity: 0.3;
`;

export const SeparatorSpace = styled.div<{ marginValue: number }>`
    margin: ${(props) => props.marginValue}rem;
`;

export const RoleDescription = styled.div`
    line-height: 1.5rem;
    font-size: 0.9rem;
    font-weight: 50;
`;