import styled from "styled-components";

export const SeparatorPadding = styled.div<{ value: number }>`
    padding: ${(props) => props.value}rem;
`;

export const SeparatorMargin = styled.div<{ value: number }>`
    margin: ${(props) => props.value}rem;
`;