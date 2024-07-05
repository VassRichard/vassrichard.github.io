import styled, { keyframes, css } from 'styled-components';
import MoreIcon from "../../../assets/technologies/more_icon.png";
import { Breakpoints, minWidthQuery } from "../../../utils/globals";

export const TechnologyCardContainer = styled.div`
    width: 20rem;

    ${minWidthQuery(Breakpoints.nano)} {
      // margin: 1rem 0 1rem 0;
    }

`;

export const ServiceCardIcon = styled.img`
    width: 2rem;
    height: 2rem;
`;

export const TechnologyCardTitle = styled.p<{ isHovered: boolean }>`
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    font-family: 'Aspekta', sans-serif;
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      background-color: #FFA500;
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
`;

export const TechnologyCardWrapper = styled.div`
    padding: 1rem;
    border-radius: 1rem;
`;