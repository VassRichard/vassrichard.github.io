import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const AboutMeWrapper = styled.div`
    margin: 2.5rem 2.5rem 2.5rem 2.5rem;
    background-color: #FFFFFF;

    ${minWidthQuery(Breakpoints.nano)} {
        margin: 3.5rem 3.5rem 3.5rem 3.5rem;
    }

    ${minWidthQuery(Breakpoints.medium)} {
        margin: 3.5rem 5rem 3.5rem 5rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        margin: 3.5rem 10rem 3.5rem 10rem;
    }
`;

export const DescriptionText = styled.div`
    font-size: 1rem;
    letter-spacing: 0.1rem;

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: 1.25rem;
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
    width: 10rem;
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