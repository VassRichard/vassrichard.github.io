import styled from "styled-components";
import { Breakpoints, minWidthQuery } from "../../utils/globals";

export const SeparatorPadding = styled.div<{ value: number }>`
    padding: ${(props) => props.value}rem;
`;

export const SeparatorMargin = styled.div<{ value: number }>`
    margin: ${(props) => props.value}rem;
`;

export const FlexContainer = styled.div<{ positionType: string }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${(props) => props.positionType};
`;

export const FlexColumn = styled.div<{
    textAlign: string,
    columnPercentage: number,
    shouldHaveBorder?: boolean,
    alignColumnsCenter?: boolean,
    padding?: number;
}>`
    flex: 1 1 100%;
    border-bottom: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
    text-align: ${(props) => props.textAlign};
    
    ${minWidthQuery(Breakpoints.large)} {
        flex: ${(props) => `1 1 ${props.columnPercentage}%;`}
        border-right: ${(props) => props.shouldHaveBorder ? '1px solid rgba(204, 204, 204, 0.7)' : 'none'};
        border-bottom: none;
        
    } ${(props) => props.alignColumnsCenter && `
        display: flex;
        justify-content: center;
    `}
`;

export const SocialMediaWrapper = styled.div<{ isBackgroundLight: boolean }>`
    margin: 0 0.75rem 0 0.75rem;
    transition: all 500ms ease;
    cursor: pointer;
`

export const SocialMediaIcon = styled.img<{ isBackgroundLight: boolean }>`
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    transition: all 500ms ease;

    // img {
    //     filter: ${(props) => (props.isBackgroundLight ? 'brightness(0)' : 'brightness(1)')};
    // }

    :hover {
        fill: red;
        // fill: brightness(1);
    }
`;