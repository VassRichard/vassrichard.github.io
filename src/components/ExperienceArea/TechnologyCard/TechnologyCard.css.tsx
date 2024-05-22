import styled, { keyframes } from 'styled-components';
import MoreIcon from "../../../assets/technologies/more_icon.png";

export const TechnologyCardContainer = styled.div`
    width: 17.5rem;
    height: 22.5rem;
`;

// export const TechnologyCardMetadataWrapper = styled.div`
//     width: 100%;
//     height: 100%;
//     // padding: 20px;
//     margin: 0 1rem 0 1rem;
//   // margin-bottom: 20px; /* Add some space between cards */
//     // position: absolute;
//     // cursor: pointer;
//     // background-size: cover; 
//     // background-position: center;
//     // transition: filter 0.3s ease-in-out;
//     display: flex; /* Ensure contents take full width */
//   flex-direction: column; /* Stack contents vertically */
// `;

export const TechnologyCardTitle = styled.div`
    width: 100%;
    top: 1rem;
    left: 1rem;
    position: relative;
    color: white;
    font-size: 1.1rem;
    font-family: 'Aspekta', sans-serif;
    text-align: start;
    align-items: center;
`;

// export const TechnologyCardDescription = styled.div`
//     width: 100%;
//     top: 2.75rem;
//     // padding: 0 1rem 0 1rem;
//     position: absolute;
//     color: white;
//     font-size: 0.85rem;
//     font-family: 'Aspekta', sans-serif;
//     // text-align: start;
//     // align-items: center;
// `;

export const TechnologyCardWrapper = styled.div`
    width: 100%;
    height: 100%;
    // margin: 0 1rem 0 1rem;
    position: relative;
    cursor: pointer;
    background-size: cover; 
    background-position: center;
    transition: filter 0.3s ease-in-out;
`;

export const TechnologyCardWallpaper = styled.div<{ wallpaper: string }>`
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1) -10%, rgba(0, 0, 0, 0) 50%), url(${(props) => props.wallpaper});
    background-size: cover; 
    background-position: center;
    border-radius: 0.5rem;
    transition: filter 0.3s ease-in-out;
    cursor: pointer;
`;

const fadeInSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const MoreIconWrapper = styled.div`
    width: 2.5rem;
    height: 100%;
    margin: 0 auto;
    left: 42.5%; 
    background-image: url(${MoreIcon});
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    display: block;
    opacity: 0; /* Start with the icon hidden */
    animation: ${fadeInSlideUp} 0.5s forwards; /* Animation for appearance */
`;