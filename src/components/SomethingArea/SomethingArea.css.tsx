import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const SomethingWrapper = styled.div`
    height: 20rem;
    margin: 3.5rem;
    background-color: #FFFFFF;
`;

export const TitleText = styled.div`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Aspekta', sans-serif;
    font-weight: 100;
    letter-spacing: 0.05rem;

    ${minWidthQuery(Breakpoints.nano)} {
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.small)} {
        font-size: 1.75rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        font-size: 2rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 2rem;
        letter-spacing: 0.25rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: 3.5rem;
    }
`;

export const DescriptionText = styled.div<{ size: number }>`
    margin-top: 2.5rem;
    font-size: ${(props) => props.size}rem;
    text-align: center;
    letter-spacing: 0.1rem;

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: ${(props) => props.size + 0.25}rem;
    }
`