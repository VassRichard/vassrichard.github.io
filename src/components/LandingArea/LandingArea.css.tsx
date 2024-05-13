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
    top: 17.5%;
    position: absolute;
    color: White;

    ${minWidthQuery(Breakpoints.nano)} {
        width: 90%;
        left: 5%;
        right: 5%;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 30%;
        left: 5%;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        width: 35%;
    }

`;

export const PersonWrapper = styled.div`
    height: 85vh;
    position: relative;
    top: 15%;
    opacity: 0.75;
    background: url(${PersonImage}) center center;
    background-size: contain;
    background-repeat: no-repeat;

    ${minWidthQuery(Breakpoints.nano)} {
        height: 40vh;
        top: 60.5%;
        margin: 0;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        height: 80vh;
        top: 20%;
        margin: 0 0 0 5.5rem;
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

    ${minWidthQuery(Breakpoints.nano)} {
        width: 100%;
        font-size: 2rem;
    }

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

    ${minWidthQuery(Breakpoints.nano)} {
        width: 100%;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 50%;
    }
`;

export const SeparatorSpace = styled.div<{ marginValue: number }>`
    margin: ${(props) => props.marginValue}rem;
`;

export const RoleDescription = styled.div`
    line-height: 1.5rem;
    font-size: 0.9rem;
    font-weight: 50;

    ${minWidthQuery(Breakpoints.nano)} {
        text-align: center;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 0.75rem;
        text-align: start;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 0.9rem;
    }
`;