import styled from 'styled-components';
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const SomethingWrapper = styled.div`
    height: 25rem;
    // margin: 3.5rem;
    padding: 5rem;
    background-color: #0b0b0a;
    color: white;
`;

export const DescriptionText = styled.div<{ size: number }>`
    // margin-top: 2.5rem;
    font-size: ${(props) => props.size}rem;
    text-align: center;
    letter-spacing: 0.1rem;

    ${minWidthQuery(Breakpoints.xxLarge)} {
        font-size: ${(props) => props.size + 0.25}rem;
    }
`