import styled from 'styled-components';
import PersonImage from '../../assets/PersonImage.png';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const LandingAreaWrapper = styled.div`
    height: auto;
    background: #000101 center center;
`;

export const FlexContainer = styled.div`
    height: 100%;
    margin: 0;
    padding: 2.5rem 0 2.5rem 0;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    ${minWidthQuery(Breakpoints.nano)} {
        margin: 0;
        padding: 2.5rem 0 2.5rem 0;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 0 2.5rem 0 2.5rem;
        padding: 0;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        margin: 0 5rem 0 5rem;
        padding: 0;
    }

    ${minWidthQuery(Breakpoints.large)} {
        margin: 0 10rem 0 10rem;
        padding: 1.45rem 0 1.45rem 0;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        margin: 0 15rem 0 15rem;
        padding: 1.45rem 0 1.45rem 0;
    }
`

export const DescriptionWrapper = styled.div`
    padding: 3.5rem 0 3.5rem 0;
    color: white;

    ${minWidthQuery(Breakpoints.nano)} {
        padding: 5rem 0 5rem 0;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        padding: 10rem 0 10rem 0rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        padding: 17.5rem 0 17.5rem 0rem;
    }
`;

export const DefaultDescriptionText = styled.div`
    font-size: 1rem;
    font-weight: 50;
    letter-spacing: 0.1rem;

    ${minWidthQuery(Breakpoints.nano)} {
        font-size: 1rem;
        font-weight: 50;
        letter-spacing: 0.1rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        font-size: 0.75rem;
        font-weight: 50;
        letter-spacing: 0.1rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        font-size: 1rem;
        font-weight: 50;
        letter-spacing: 0.1rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: 1.5rem;
        font-weight: 50;
        letter-spacing: 0.1rem;
    }
`

export const DescriptionText = styled.div`
    font-family: 'Aspekta', sans-serif;
    font-size: 2.5rem;
    font-weight: 750;
    letter-spacing: 0.15rem;

    ${minWidthQuery(Breakpoints.medium)} {
        font-family: 'Aspekta', sans-serif;
        font-size: 2rem;
        font-weight: 750;
        letter-spacing: 0.1rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        font-size: 2.5rem;
        font-weight: 750;
        letter-spacing: 0.15rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: 3rem;
    }
`

export const PersonWrapper = styled.div`
    width: 25rem;
    height: 20rem;
    top: 2.6rem;
    position: relative;
    opacity: 0.75;
    background: url(${PersonImage}) center center;
    background-size: contain;
    background-repeat: no-repeat;

    ${minWidthQuery(Breakpoints.nano)} {
        width: 25rem;
        height: 20rem;
        top: 2.6rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        width: 25rem;
        height: 20rem;
        top: 4.5rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        width: 27.5rem;
        height: 22.5rem;
        top: 3.25rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        width: 35rem;
        height: 27.5rem;
        top: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        width: 45rem;
        height: 40rem;
        top: 5.1rem;
    }
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