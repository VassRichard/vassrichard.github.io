import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const ExperienceAreaWrapper = styled.div`
    margin: 3.5rem;
    // background-color: #FFFFFF;
`;

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