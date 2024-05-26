import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const ExperienceAreaWrapper = styled.div`
    margin: 3.5rem;
    background-color: #FFFFFF;
`;

export const TitleText = styled.div`
    width: 100%;
    margin: 2.5rem 0 2.5rem 0;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Aspekta', sans-serif;
    font-weight: 500;
    letter-spacing: 0.05rem;

    ${minWidthQuery(Breakpoints.nano)} {
        font-size: 1.5rem;
    }

    ${minWidthQuery(Breakpoints.nano)} {
        font-size: 1.75rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        font-size: 2rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        font-size: 3rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: 3.5rem;
    }
`;

export const CurriculumVitaeText = styled.div`
    padding: 1rem 3rem 1rem 3rem;
    position: relative;
    background-color: black;
    border-radius: 1.5rem;
    color: white;
    font-size: 0.65rem;
    text-align: center;
    letter-spacing: 0.1rem;
    cursor: pointer;
    user-select: none;

    ${minWidthQuery(Breakpoints.nano)} {
        bottom: 0;
        right: 0;
        margin: 0 1rem 0 1rem;
        position: relative;
        text-align: center;
    }

    ${minWidthQuery(Breakpoints.small)} {
        margin: 0 10rem 0 10rem;
        font-size: 0.75rem;
    }

    ${minWidthQuery(Breakpoints.mediumExtra)} {
        bottom: -6rem;
        right: 2.5rem;
        margin: 0;
        position: absolute;
        font-size: 0.6rem;
    }

    ${minWidthQuery(Breakpoints.large)} {
        bottom: -6.6rem;
        padding: 1rem 3rem 1rem 3rem;
        font-size: 0.75rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        bottom: -7rem;
        font-size: 1rem;
    }
`;

export const TechnologyCardsWrapper = styled.div`

    ${minWidthQuery(Breakpoints.nano)} {
        margin: 0 1.5rem 0 1.5rem;
    }

    ${minWidthQuery(Breakpoints.small)} {
        margin: 0 7.5rem 0 7.5rem;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
        margin: 0 15rem 0 15rem;
    }
`;

export const FlexContainer = styled.div<{ positionType: string }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.positionType};
`;