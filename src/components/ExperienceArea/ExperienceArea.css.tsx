import styled from 'styled-components';

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
    font-size: 2.5rem;
    font-family: 'Aspekta', sans-serif;
    font-weight: 100;
    letter-spacing: 0.05rem;
`;

export const CurriculumVitaeText = styled.div`
    position: absolute;
    right: 2.5rem;
    padding: 1rem 3rem 1rem 3rem;
    margin: -0.25rem 0 0 0;
    background-color: black;
    border-radius: 1.5rem;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
    user-select: none;
`;

export const TechnologyCardsWrapper = styled.div`
    margin: 0 10rem 0 10rem;
`;

export const FlexContainer = styled.div<{ positionType: string }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.positionType};
`;