import styled from 'styled-components';
import LandingAreaWallpaper from '../../assets/LandingArea.jpeg';
import PersonImage from '../../assets/PersonImage.png';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const LandingAreaWrapper = styled.div<{
    isSmallDevice: boolean;
}>`
    height: 100vh;
    position: relative;
    background: url(${LandingAreaWallpaper}) center center;
    background-size: ${(props) => props.isSmallDevice ? 'cover' : 'contain'};
`;

export const DescriptionWrapper = styled.div`
    width: 35%;
    top: 17.5%;
    left: 5%;
    position: absolute;
    color: White;

    ${minWidthQuery(Breakpoints.medium)} {
        width: 30%;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        width: 35%;
    }

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

    ${minWidthQuery(Breakpoints.medium)} {
        height: 80vh;
        top: 20%;
    }

    ${minWidthQuery(Breakpoints.large)} {
        height: 85vh;
        top: 15%;
    }
`;

export const RoleWrapper = styled.div`
    width: 50%;
    font-family: 'Aspekta', sans-serif;
    letter-spacing: 0.15rem;

    ${minWidthQuery(Breakpoints.medium)} {
        width: 88.75%;
        font-size: 2rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 63.25%;
    }
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

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 0.75rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 0.9rem;
    }
`;