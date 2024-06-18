import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const AboutMeWrapper = styled.div`
    margin: 5rem 5rem 5rem 5rem;
    background-color: #FFFFFF;

    ${minWidthQuery(Breakpoints.nano)} {
        margin: 5rem 5rem 5rem 5rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 5rem 7.5rem 5rem 7.5rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        margin: 7.5rem 15rem 7.5rem 15rem;
    }
`;

export const DescriptionText = styled.div<{ size: number }>`
    font-size: ${(props) => props.size}rem;
    letter-spacing: 0.1rem;

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: ${(props) => props.size + 0.25}rem;
    }
`

export const HeadlineWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;

    ${minWidthQuery(Breakpoints.nano)} {
        grid-template-columns: 1fr;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        grid-template-columns: 1fr 2.75fr 1fr;
    }
`;

export const CurriculumVitaeText = styled.div`
    width: 7.5rem;
    margin: 0 auto;
    margin-top: 1rem;
    padding: 1rem 2rem 1rem 2rem;
    background-color: black;
    border-radius: 1.5rem;
    color: white;
    font-size: 0.65rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    user-select: none;
    text-align: center;

    ${minWidthQuery(Breakpoints.nano)} {
        width: 10rem;
        margin-top: 1rem;
        padding: 1rem 2rem 1rem 2rem;
    }

`;