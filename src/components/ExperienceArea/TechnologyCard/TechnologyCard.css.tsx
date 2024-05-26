import styled, { keyframes, css } from 'styled-components';
import MoreIcon from "../../../assets/technologies/more_icon.png";
import { Breakpoints, minWidthQuery } from "../../../utils/globals";

export const TechnologyCardContainer = styled.div`
    width: 17.5rem;
    height: 22.5rem;
    margin: 1rem 0 1rem 0;

    ${minWidthQuery(Breakpoints.nano)} {
      margin: 1rem 0 1rem 0;
    }

    ${minWidthQuery(Breakpoints.xxLarge)} {
      width: 25rem;
      height: 32.5rem;
    }
`;

export const TechnologyCardMetadataWrapper = styled.div`
    padding: 0.75rem;
    position: relative;
`;

export const TechnologyCardTitle = styled.div`
    width: 100%;
    // top: 1rem;
    // left: 1rem;
    // position: relative;
    color: white;
    font-size: 1.1rem;
    font-family: 'Aspekta', sans-serif;
    text-align: start;
    align-items: center;

    ${minWidthQuery(Breakpoints.xxLarge)} {
      // top: 1.4rem;
      // left: 1.4rem;
      font-size: 1.5rem;
    }
`;

export const TechnologyCardDescription = styled.div`
    width: 100%;
    top: 2.75rem;
    // padding: 0 1rem 0 1rem;
    // position: absolute;
    color: white;
    font-size: 0.85rem;
    font-weight: 50;
    // font-family: 'Aspekta', sans-serif;
    // text-align: start;
    // align-items: center;
`;

export const TechnologyCardWrapper = styled.div`
    width: 100%;
    height: 100%;
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

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.1;
  }
`;

const overlayFadeOut = keyframes`
  from {
    opacity: 0.1;
  }
  to {
    opacity: 0;
  }
`;

export const TechnologyCardWallpaperOverlay = styled.div<{ isHovered: boolean }>`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    animation: ${(props) => props.isHovered ? css`${overlayFadeIn} 0.5s forwards` : css`${overlayFadeOut} 0.5s forwards`};
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

const fadeOutSlideDown = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const MoreIconWrapper = styled.div<{ isHovered: boolean }>`
    width: 2.5rem;
    height: 2.5rem;
    top: 50%;
    left: 45%;
    position: absolute;
    background-image: url(${MoreIcon});
    background-size: contain; 
    background-position: center;
    background-repeat: no-repeat;    
    animation: ${(props) => props.isHovered ? css`${fadeInSlideUp} 0.5s forwards` : css`${fadeOutSlideDown} 0.5s forwards`};
`;