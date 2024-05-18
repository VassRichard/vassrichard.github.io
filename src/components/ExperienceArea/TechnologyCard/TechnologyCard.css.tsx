import styled from 'styled-components';

export const TechnologyCardWrapper = styled.div`
    width: 17.5rem;
    height: 22.5rem;
`;

export const TechnologyCardTitleWrapper = styled.div`
    height: 5rem;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const TechnologyCardTitle = styled.div`
    align-items: center;
    font-size: 1.75rem;
    font-family: 'Aspekta', sans-serif;
    font-weight: bold;
`;

export const TechnologyCardWallpaper = styled.div<{ wallpaper: string }>`
    width: 100%;
    height: 100%;
    border: 0.1rem solid black;
    background-image: url(${(props) => props.wallpaper});
    background-size: cover; 
    background-position: center;
    filter: grayscale(100%);
`;