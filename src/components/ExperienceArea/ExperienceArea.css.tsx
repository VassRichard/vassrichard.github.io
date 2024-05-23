import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const SeparatorSpace = styled.div`
    padding: 1.5rem;
`;

export const ExperienceAreaWrapper = styled.div`
    height: 100vh;
    background-color: #FFFFFF;
`;

export const TitleText = styled.div`
    width: 100%;
    margin: 2.5rem 0 2.5rem 0;
    text-align: center;
    font-family: 'Aspekta', sans-serif;
    font-weight: 100;
    letter-spacing: 0.05rem;

    ${minWidthQuery(Breakpoints.nano)} {
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        font-size: 1.75rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 2.5rem;
    }
`;

export const CurriculumVitaeText = styled.div`
    margin: 0 2.5rem 0 2.5rem;
    padding: 1rem 3rem 1rem 3rem;
    position: relative;
    background-color: black;
    border-radius: 1.5rem;
    color: white;
    text-align: center;
    letter-spacing: 0.1rem;
    cursor: pointer;
    user-select: none;

    ${minWidthQuery(Breakpoints.nano)} {
        bottom: 0;
        right: 0;
        position: relative;
        text-align: center;
    }

    ${minWidthQuery(Breakpoints.small)} {
        margin: 0 15rem 0 15rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        bottom: -5rem;
        right: 2.5rem;
        margin: 0;
        position: absolute;
        font-size: 0.75rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        bottom: -5.5rem;
        margin: -0.25rem 0 0 0;
        font-size: 1rem;
    }
`;

export const TechnologyCardsWrapper = styled.div`

    ${minWidthQuery(Breakpoints.nano)} {
        margin: 0 5rem 0 5rem;
    }

    ${minWidthQuery(Breakpoints.small)} {
        margin: 0 10rem 0 10rem;
    }
`;

export const FlexContainer = styled.div<{ positionType: string }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.positionType};
`;